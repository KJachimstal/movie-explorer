import { useEffect, useState, useRef } from 'react';

const cache = new Map();

export default function useCachedFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isCancelled = useRef(false);

  useEffect(() => {
    if (!url) return;

    if (cache.has(url)) {
      setData(cache.get(url));
      return;
    }

    setLoading(true);
    setData(null);
    setError(null);
    isCancelled.current = false;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Network err');
        return res.json();
      })
      .then((json) => {
        if (!isCancelled.current) {
          cache.set(url, json);
          setData(json);
        }
      })
      .catch((err) => {
        if (!isCancelled.current) {
          setError(err);
        }
      })
      .finally(() => {
        if (!isCancelled.current) {
          setLoading(false);
        }
      });

    return () => {
      isCancelled.current = true;
    };
  }, [url]);

  return { data, isLoading, error };
}

import { useEffect, useState } from 'react';

const useApi = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(url, { mode: 'no-cors' });
      if (response.ok) {
        setData(response.json());
        setLoading(true);
      }
    })();
  }, [url]);

  return [loading, data];
};

export default useApi;

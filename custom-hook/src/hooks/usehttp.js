import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async (url, datafunc, config) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        url,
        !config ? {method: 'GET', headers: {}, body: null} : config
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      datafunc(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    fetchTasks
  }
};

export default useHttp;

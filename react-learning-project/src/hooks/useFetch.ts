import { useState, useEffect } from 'react';

/**
 * Custom Hook for fetching data
 * Learn: Custom hooks, useEffect, useState
 */
interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export const useFetch = <T,>(
  fetchFn: () => Promise<T>,
  dependencies: any[] = []
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = async () => {
    setLoading(true);
    try {
      const result = await fetchFn();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, dependencies);

  return { data, loading, error, refetch };
};

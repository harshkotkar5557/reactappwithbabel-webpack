import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        setError("");
        setUserData(result.data);
      } catch (error) {
        setError(`Error fetching data: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  // Memoize the data to prevent unnecessary re-fetching
  const memoizedData = useMemo(() => userData, [userData]);

  return [memoizedData, loading, error];
};

export default useFetch;

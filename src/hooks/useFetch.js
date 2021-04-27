import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        setError(err);
      })
      .finally((_) => {
        setLoading(false);
      });
  }, []);


  return {
    data,
    loading,
    error
  }
}
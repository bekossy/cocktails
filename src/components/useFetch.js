import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();
    setIsLoading(true);
    setIsError(null);
    setData(null);
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          throw new Error("could not fetch the data for that resource");
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
        } else {
          setIsError(err.message);
          setIsLoading(false);
          setData(null);
        }
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isError, isLoading };
};

export default useFetch;

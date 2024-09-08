import { useEffect, useState } from "react";

const useFetch = (url: string, key?: string | undefined, trigger?: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [fetchQuote, setFetchQuote] = useState();

  useEffect(() => {
    if (key) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": `${key}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setData(data[0]);
        });
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        });
    }
  }, [url, trigger]);

  return { isLoading, data };
};

export default useFetch;

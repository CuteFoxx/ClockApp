import { useEffect, useState } from "react";

const useFetch = (url: string, key?: string | undefined) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (key) {
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": `${key}`,
        },
      }).then((data) => {
        setIsLoading(false);
        setData(data);
      });
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIsLoading(false);
          setData(data);
        });
    }
  }, [url]);

  return { isLoading, data };
};

export default useFetch;

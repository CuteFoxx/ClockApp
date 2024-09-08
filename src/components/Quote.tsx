import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Quote = () => {
  const [data, setData] = useState({ quote: "", author: "" });
  const apiNinjasKey = process.env.VITE_APININJAS_KEY;

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    const { isLoading: isLoadingQuote, data: quoteData } = useFetch(
      "https://api.api-ninjas.com/v1/quotes?category=computers",
      apiNinjasKey
    );
    if (!isLoadingQuote) {
      setData(quoteData);
    }
  };

  return (
    <div className="app__quote">
      <div className="app__quote-wrapper">
        <div className="app__quote-text">{data.quote}</div>
        <div className="app__quote-author">{data.author}</div>
      </div>
      <button className="app__quote-refresh" onClick={getNewQuote}></button>
    </div>
  );
};

export default Quote;

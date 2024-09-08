import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Quote = ({ data, setTrigger }: { data: any; setTrigger: any }) => {
  let i = 1;
  return (
    <div className="app__quote">
      <div className="app__quote-wrapper">
        <div className="app__quote-text">{data.quote}</div>
        <div className="app__quote-author">{data.author}</div>
      </div>
      <button
        className="app__quote-refresh"
        onClick={() => {
          setTrigger(i);
          i = Math.random();
        }}
      ></button>
    </div>
  );
};

export default Quote;

import { DateTime, Settings } from "luxon";
import { useEffect, useState } from "react";
import Quote from "./components/Quote.tsx";
import Greeting from "./components/Greeting.tsx";
import CurrentTime from "./components/CurrentTime.tsx";
import Location from "./components/Location.tsx";
import MoreInfo from "./components/MoreInfo.tsx";
import useFetch from "./hooks/useFetch.tsx";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [curentTimeHour, setCurrentTimeHour] = useState<string>();
  const [currentTime, setCurrentTime] = useState<string>();

  const handleClick = (): void => {
    setShowMore(!showMore);
  };

  const apiNinjasKey = process.env.VITE_APININJAS_KEY;
  const ipDataKey = process.env.VITE_IPDATA_KEY;
  const { isLoading: isLoadingQuote, data: quote } = useFetch(
    "https://api.api-ninjas.com/v1/quotes?category=computers",
    apiNinjasKey
  );
  const { isLoading: isLoadingLocation, data: locationData } = useFetch(
    `https://api.ipdata.co?api-key=${ipDataKey}`
  );

  useEffect(() => {
    Settings.defaultZone = locationData?.time_zone?.name;
    setCurrentTimeHour(DateTime.local().toFormat("HH"));
    setCurrentTime(DateTime.local().toFormat("HH:mm"));
  }, [locationData]);

  setInterval(() => {
    setCurrentTimeHour(DateTime.local().toFormat("HH"));
    setCurrentTime(DateTime.local().toFormat("HH:mm"));
  }, 60000);

  if (!isLoadingQuote && !isLoadingLocation && curentTimeHour) {
    return (
      <div
        className={`app ${
          +curentTimeHour > 5 && +curentTimeHour < 18 ? "day" : "night"
        }`}
      >
        <div className="app__container">
          <Quote />
          <div className="app__time-wrapper">
            <Greeting curentTimeHour={curentTimeHour} />
            <CurrentTime
              currentTime={currentTime}
              abbr={locationData?.time_zone?.abbr}
            />
            <Location
              city={locationData?.city}
              country_code={locationData?.country_code}
            />
          </div>
          <button
            className={`app__show-more-btn ${showMore ? "active" : ""}`}
            onClick={handleClick}
          >
            {showMore ? "LESS" : "MORE"}
          </button>
          <MoreInfo
            showMore={showMore}
            timeZoneName={locationData?.time_zone?.name}
          />
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
export default App;

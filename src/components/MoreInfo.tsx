import { DateTime } from "luxon";
import { useEffect, useState } from "react";

const MoreInfo = ({
  showMore,
  timeZoneName,
}: {
  showMore: boolean;
  timeZoneName: string | undefined;
}) => {
  const [dt, setDt] = useState<DateTime<true> | DateTime<false>>();

  useEffect(() => {
    setDt(DateTime.now().setZone(timeZoneName));
  }, []);

  return (
    <div className={`app__more-info ${showMore ? "app__more-info--more" : ""}`}>
      <div className="app__info-group2">
        <div className="app__info-item">
          <div className="app__info-item-label">CURRENT TIMEZONE</div>
          <div className="app__info-item-text">{timeZoneName}</div>
        </div>
        <div className="app__info-item">
          <div className="app__info-item-label">Day of the year</div>
          <div className="app__info-item-text">{dt?.ordinal}</div>
        </div>
      </div>
      <div className="app__info-group2">
        <div className="app__info-item">
          <div className="app__info-item-label">Day of the week</div>
          <div className="app__info-item-text">{dt?.weekday}</div>
        </div>
        <div className="app__info-item">
          <div className="app__info-item-label">Week number</div>
          <div className="app__info-item-text">{dt?.weekNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

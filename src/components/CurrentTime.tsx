const CurrentTime = ({
  currentTime,
  abbr,
}: {
  currentTime: string | undefined;
  abbr: string | undefined;
}) => {
  if (currentTime) {
    return (
      <div className="app__time-current-time">
        {currentTime}
        <span className="app__time-abbreviation">{abbr}</span>
      </div>
    );
  }
};

export default CurrentTime;

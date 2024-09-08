const Location = ({
  city,
  country_code,
}: {
  city: string | undefined;
  country_code: string | undefined;
}) => {
  return (
    <div className="app__time-location">{`In ${city}, ${country_code}`}</div>
  );
};

export default Location;

const Greeting = ({
  curentTimeHour,
}: {
  curentTimeHour: string | undefined;
}) => {
  const getGreeting = (curentTimeHour: string | undefined) => {
    if (curentTimeHour) {
      if (+curentTimeHour > 5 && +curentTimeHour < 12) {
        return "Good morning";
      } else if (+curentTimeHour > 12 && +curentTimeHour < 18) {
        return "Good afternoon";
      } else {
        return "Good evening";
      }
    } else {
      return "Greeting";
    }
  };

  if (curentTimeHour) {
    return (
      <div
        className={`app__time-greeting ${
          +curentTimeHour > 5 && +curentTimeHour < 18 ? "day" : "night"
        }`}
      >
        {`${getGreeting(curentTimeHour)}, it's currently`}
      </div>
    );
  }
};

export default Greeting;

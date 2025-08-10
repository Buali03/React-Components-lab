const Weather = ({ forecast }) => {
  return (
    <ul>
      {forecast.map((element) => {
        return (
          <div className="weather">
            <h2>{element.day}</h2>
            <img src={element.img} alt={element.imgAlt} />
            <p>
              <span>Conditions: </span>
              {element.conditions}
            </p>
            <p>
              <span>Time: </span>
              {element.time}
            </p>
          </div>
        );
      })}
    </ul>
  );
};

export default Weather;

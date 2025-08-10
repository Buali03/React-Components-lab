// src/App.jsx

const App = () => {
  const weatherForecasts = [
    {
      day: "Mon",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg",
      imgAlt: "sun icon",
      conditions: "sunny",
      time: "Morning",
    },
    {
      day: "Tue",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg",
      imgAlt: "moon icon",
      conditions: "clear",
      time: "Night",
    },
    {
      day: "Wed",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg",
      imgAlt: "clouds with lightning icon",
      conditions: "stormy",
      time: "All Day",
    },
    {
      day: "Thu",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg",
      imgAlt: "sun overcast by clouds icon",
      conditions: "overcast",
      time: "Evening",
    },
    {
      day: "Fri",
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg",
      imgAlt: "moon overcast by clouds icon",
      conditions: "cloudy",
      time: "Night",
    },
  ];
  return (
    <>
      <h1>Local Weather</h1>
      <section>
        <ul>
          {weatherForecasts.map((element) => {
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
      </section>
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import Search from "./Component/Search";
import Display from "./Component/Display";
import History from "./Component/History";

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

function App() {
  const [location, setLocation] = useState();

  const [weather, setWeather] = useState(null);

  const [message, setMsg] = useState("Data will appare here...");

  const [history, setHistory] = useState([]);

  const GetData = async (name = "") => {
    setMsg("searching.....");
    setWeather(null);

    if (location !== null || name !== "") {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${
        name !== "" ? name : location
      }&appid=${API_KEY}&units=metric`;
      const response = await fetch(API);
      const data = await response.json();

      if (data.cod === "404") {
        setMsg(data.message);
      } else {
        setWeather(data);
      }
    }
  };

  const researchHandler = (locationName) => {
    if (location !== locationName) {
      setLocation(locationName);
      GetData(locationName);
    }
  };

  useEffect(() => {
    if (weather !== null) {
      const oldhistory = history;
      oldhistory.push(weather.name);

      setHistory([...new Set(oldhistory)]);
    }
  }, [weather]);

  useEffect(() => {
    
      const lsHistory = JSON.stringify(history);
      localStorage.setItem("history", lsHistory);
    
  }, [history]);

  useEffect(() => {
    const lsHistory = localStorage.getItem("history");
    if (lsHistory !== null) {
      setHistory(JSON.parse(lsHistory));
    }
  }, []);

  const removeHistoryItem = (index) => {
    setHistory(
      history.filter((d, i) => {
        return i != index;
      })
    );
  };

  return (
    <div className=" max-w-[1300px] flex flex-col justify-around  my-5 h-[700px] mx-auto">
      <div className=" shadow-2xl w-[70%]  mx-auto h-[70px] ">
        <Search location={location} handler={setLocation} GetData={GetData} />
      </div>

      <div className="w-[100%]   justify-around h-[500px] flex">
        <div className=" border-t-2 shadow-2xl w-[30%] ">
          <History
            history={history}
            handler={researchHandler}
            removeHandler={removeHistoryItem}
            clearHis={setHistory}
          />
        </div>

        <div className=" border-t-2 shadow-2xl w-[65%] ">
          <Display weather={weather} message={message} />
        </div>
      </div>
    </div>
  );
}

export default App;

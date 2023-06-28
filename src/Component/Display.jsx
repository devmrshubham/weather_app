import React from "react";

function Display({ weather: response, message }) {
  const TimestamTotime = (stam) => {

    const data = new Date(stam * 1000)
    return `${data.getHours()}: ${data.getMinutes()}:${data.getSeconds()}`

  }

  return (
    <div className="font-[Philosopher]" >
      {
        response == null
          ?
          <div className="text-center capitalize mt-6 text-red-500 text-2xl">{message} </div>
          :

          <div className="flex text-center gap-y-10  p-10 items-center flex-col ">
            <div className=" capitalize p-2 w-[400px] shadow-md border-t-2 text-2xl">location    :    {response.name} </div>

            <div className=" w-[400px] shadow-md border-t-2  justify-around flex items-center">
              <img src={`https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`} alt="" />
              <h1 className="text-2xl" >{response.main.temp} °C    - {response.weather[0].main} </h1>
            </div>

            <div className="w-[400px] shadow-md border-t-2 p-2 text-2xl flex justify-around items-center">
              <div className="">Sunrise {TimestamTotime(response.sys.sunrise)} </div>
              <div className="">Sunset {TimestamTotime(response.sys.sunset)} </div>
            </div>




          </div>
      }
    </div>
  );
}

export default Display;

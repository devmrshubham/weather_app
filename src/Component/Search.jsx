import React from "react";

function Search({ location, handler, GetData }) {
  const changeHandler = (e) => {

    handler(e.target.value)

  }

  const keyUpHandler = (e) => {
    if (e.key == "Enter") {
      GetData();
    }
  }

  return (
    <div>
      <input value={location} placeholder="Enter your city"  onKeyUp={keyUpHandler} onChange={changeHandler} className="h-[70px] w-[100%] border-t-2 focus:outline-none text-3xl font-[Philosopher] capitalize pl-10 p-3 rounded" />
    </div>
  );
}

export default Search;

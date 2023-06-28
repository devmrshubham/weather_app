import { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

function History({ history, handler, removeHandler ,clearHis }) {

  const removeItem = (e, index) => {
    e.stopPropagation();
    removeHandler(index)

  }


  return (
    <div>
      <h1 className="text-center flex justify-between px-5 font-[Philosopher] text-2xl text-red-500 mt-5 "> History <button onClick={()=>clearHis([])} className=" border-2 text-[16px] px-1 rounded bg-red-500 text-white "> Clear History</button> </h1>
      <ul className="p-2   ">
        {
          history.length > 0
            ?


            history.map((d, i) => {
              return <li key={i} onClick={() => handler(d)} className="font-[Philosopher] text-2xl h-10  my-3 cursor-pointer flex justify-between items-center shadow-md  rounded px-2 w-[100%] text-red-600  border">
                {d}
                <RiDeleteBack2Line onClick={(e) => removeItem(e, i)} className="text-2xl cursor-pointer " />
              </li>
            })

            :

            <div className=""></div>
        }
      </ul>
    </div>
  );
}

export default History;

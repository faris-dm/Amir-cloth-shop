import React, { useState } from "react";

function Counter() {
  const [clicked, SetClicked] = useState(0);
  function Changed() {
    SetClicked(clicked + 1);
  }
  function DownChanged() {
    SetClicked(0);
  }
  return (
    <div className="flex justify-between">
      <button
        onClick={Changed}
        className=" px-5 py-1 bg-blue-900 text-white rounded-lg cursor-pointer"
      >
        {" "}
        On me
      </button>
      <p> {clicked}</p>
      <button
        onClick={DownChanged}
        className=" px-5 py-1 bg-blue-900 text-white rounded-lg cursor-pointer"
      >
        {" "}
        On me
      </button>
    </div>
  );
}

export default Counter;

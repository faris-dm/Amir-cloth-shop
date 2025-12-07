import React, { useState } from "react";

function counter() {
  const [clicked, SetClicked] = useState(0);
  function Added() {
    SetClicked(clicked + 1);
  }
  function RemovedOne() {
    SetClicked(clicked - 1);
  }

  function Zero() {
    SetClicked(0);
  }
  const style = " px-7 py-2 bg-cyan-400 rounded-lg text-white";

  return (
    <div>
      <div className=" text-center">
        <div className="flex gap-7">
          <button onClick={Added} className={style}>
            {" "}
            Add{" "}
          </button>
          <button onClick={RemovedOne} className={style}>
            Remove{" "}
          </button>
          <button onClick={Zero} className={style}>
            {" "}
            Zero
          </button>
        </div>
        <div className="">
          <p>{clicked < 0 ? "Negative is not allowed " : clicked}</p>
        </div>
      </div>
    </div>
  );
}

export default counter;

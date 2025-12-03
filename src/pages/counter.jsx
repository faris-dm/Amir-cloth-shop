import React, { useState } from "react";

function counter() {
  const [clicked, setCliked] = useState(0);

  const Added = () => {
    setCliked(clicked + 1);
  };

  const Remove = () => {
    setCliked(clicked - 1);
  };
  const Zero = () => {
    setCliked(0);
  };

  return (
    <div>
      <div className="flex gap-5 items-center justify-around">
        <button
          className=" px-8 py-1  bg-cyan-400 rounded-lg text-white"
          onClick={Added}
        >
          {" "}
          Add
        </button>
        <button
          onClick={Remove}
          className=" px-8 py-1  bg-cyan-400 rounded-lg text-white"
        >
          {" "}
          Remove
        </button>
        <button
          onClick={Zero}
          className=" px-8 py-1  bg-cyan-400 rounded-lg text-white"
        >
          {" "}
          Zero
        </button>
      </div>
      <div className=" text-center my-6">
        <p>{clicked < 0 ? "Negative is Not Allowed" : clicked}</p>
      </div>
    </div>
  );
}

export default counter;

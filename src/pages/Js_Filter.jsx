import React, { useState } from "react";

function Js_Filter() {
  const [inputValue, New_inputVallue] = useState("");
  const Li_Style = "bg-red-400 p-5 pl-3 m-1 rounded-lg";
  const All_Li = document.querySelectorAll("ul > li");
  const Choose = ["Banana", "orange", "coconat", "apple", ""];

  return (
    <div>
      <div className=" absolute top-[30%] left-[40%] bg-[#333] px-15 py-4 rounded-xl text-white">
        <h2>Filter App</h2>
        <div>
          <input
            value={inputValue}
            onChange={(e) => New_inputVallue(e.target.value)}
            className="bg-cyan-400 p-2 m-1 rounded-lg outline-none text-black"
            type="text"
            name=""
            id=""
            placeholder=""
          />
          {Choose.map((items) => (
            <ul>
              <li>{items}</li>
            </ul>
          ))}

          {/* <ul>
            <li> Mango</li>
            <li>Bnanan</li>
            <li>Avocado</li>
            <li>Apple</li>
            <li>Kuwee</li>
            <li>Orange</li>
            <li>Strewberry</li>
            <li>{inputValue}</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Js_Filter;

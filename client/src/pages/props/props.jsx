import React from "react";
import { useState } from "react";

import slow from "../../images/slow.png";
import small from "../../images/small.png";
import stand from "../../images/standMan.png";

function Props() {
  const [input, setinput] = useState("");
  let names = ["amir", "faris", "amar", "Solo", "fadlu", "husian", "sunio"];
  let images = [slow, small, stand];
  const filter = names.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="">
      <div className="px-2 py-2 m-3 bg-red-400 text-red-800">
        <input
          w-full
          bg-cyan-400
          p-2
          mb-4
          rounded-lg
          outline-none
          text-black
          font-semibold
          placeholder-slate-700
          value={input}
          onChange={(e) => setinput(e.target.value)}
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        {filter.length > 0 ? (
          filter.map((item, index) => (
            <div className=" lg:flex md:grid grid-cols-2  grid-cols-2 px-2 ">
              <div className="p-3">
                <p>
                  <img src={images[0]} alt="" />
                </p>
                <p key={index} className="text-center">{names[0]}</p>
              </div>
              <div className="p-3">
                <p>
                  <img src={images[1]} alt="" />
                </p>
                <p className="text-center">{names[1]}</p>
              </div>
              <div className="p-3">
                <p>
                  <img src={images[2]} alt="" />
                </p>
                <p className="text-center">{names[2]}</p>
              </div>
              <div className="p-3">
                <p>
                  <img src={images[1]} alt="" />
                </p>
                <p className="text-center">{names[5]}</p>
              </div>
              <div className="p-3">
                <p>
                  <img src={images[1]} alt="" />
                </p>
                <p className="text-center">{names[3]}</p>
              </div>
            </div>
          ))
        ) : (
          <li>
            <p> No item found</p>
          </li>
        )}
      </div>
    </div>
  );
}

export default Props;

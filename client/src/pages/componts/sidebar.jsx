import React from "react";
import { Menu, Check } from "lucide-react";

function SideBar() {
  return (
    <>
      <div>
        <div>
          <p>
            <Check />
          </p>
          <h3>filter</h3>
          <div>
            <p>Sizes</p>
            <div>XS</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h3>Avalability</h3>
          <div>
            <div>
              <div></div>
              <p>Avalability</p>
              <p>(40)</p>
            </div>
            <div>
              <div></div>
              <div>Out of stack</div>

              <div>(18)</div>
            </div>
          </div>
        </div>
        <div>
          <select name="catagores" id="">
            <option>color</option>
            <option>Price Range</option>
            <option>Collections</option>
            <option>Tags</option>
          </select>
        </div>
        <p>Ratings</p>
      </div>
    </>
  );
}

export default SideBar();

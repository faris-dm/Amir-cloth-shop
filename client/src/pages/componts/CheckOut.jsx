import React from "react";

function CheckOut() {
  return (
    <div className="flex items-center justify-between mt-25 px-10">
      <div className="checkOut ">
        <h2 className="text-2xl   font-extrabold py-2">CHECKOUT</h2>
        <div className="flex gap-3 py-1 font-bold cursor-pointer hover:underline">
          <div> INFORMATION</div>
          <div>SHIPPING </div>
          <div> PAYMENT</div>
        </div>
        <div>
          <p>CONTACT INFO</p>
          <div>
            <input type="text" />
          </div>
        </div>
        {/* shooping address  */}
        <div>
          <p>SHIOOING ADDRESS</p>
          <div>
            <input type="text" />
          </div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
          <div>
            <input type="text" />
          </div>{" "}
          <div>
            <input type="text" />
          </div>
        </div>
        <button>
          <p>shipping</p>
          <p> arrow</p>
        </button>
      </div>
      <div className="order">
        <h2>YOUR ORDER</h2>
        <div>
          {/*  the images  section  */}
          <div>
            <img src="" alt="" />
            <div>
              <p>Baisc Heavy Tshirt</p>
              <p>Black</p>
              <p>(1)</p>
            </div>
          </div>
          {/*  the   changes sections */}
          <div>
            <p>changes</p>
            <p>99</p>
          </div>
        </div>
        <div className="total">
          <div>
            <p>SubTotal</p>
            <p>1000</p>
          </div>
          <div>
            <p>shipping</p>
            <a href="">addis ababa</a>
          </div>
          <div>
            <p>Total </p>
            <p>$1000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;

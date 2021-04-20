import React from "react";
import "./styles.css";
import cart from "../img/cart.png";
import close from "../img/close.png";

function Colordata() {
  return (
    <div className="color-data">
      <div className="content-top">
        <div className="image-container-close">
          <img className="btn-close" src={close} alt="cart" />
        </div>
        <div className="grid">
          <div className="row">
            <div className="col ">
              <h1>The color is displayed on the header background.</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="content-bottom">
        <div className="grid">
          <div className="row">
            <div className="col ">
              <h1>
                The color is displayed on the header background.The color is
                displayed on the header background.The color is displayed on the
                header background.The color is displayed on the header
                background.The color is displayed on the header background.The
                color is displayed on the header background.The color is
                displayed on the header background.The color is displayed on the
              </h1>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img className="btn-cart" src={cart} alt="cart" />
        </div>
      </div>
    </div>
  );
}
export default Colordata;

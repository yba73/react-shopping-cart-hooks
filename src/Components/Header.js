import React, { useState } from "react";

const Header = ({ cartList, getToggle }) => {
  const [toggle, setToggle] = useState(true);

  function sendToggole() {
    setToggle(!toggle);
    getToggle(toggle);
  }
  return (
    <header>
      <div className="container p-3">
        <div className="row">
          <div className="col-4">
            <h1 className="header-brand">shopping cart</h1>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-end ">
            <nav className="links">
              <h1>cart</h1>
              <div className="cart-icon-notification" onClick={sendToggole}>
                <i className="fa-solid fa-cart-plus cart-icon"></i>
                <span className="badge">{cartList.length}</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

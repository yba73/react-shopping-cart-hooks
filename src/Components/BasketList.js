import React, { Fragment } from "react";
import Basket from "./Basket";

const BasketList = (props) => {
  const {
    cartList,
    plusQunatity,
    muinsQuantity,
    removeItem,
    removeAllCart,
    toogleCart,
  } = props;
  const total = cartList.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
  return (
    <div>
      <Fragment>
        <div className={toogleCart ? "col-4 basket" : "basket-none"}>
          <div className="basket-container">
            {cartList.length ? (
              <Fragment>
                <h1>welcom to cart</h1>

                <h3>you have {cartList.length} items in the cart</h3>
                <button className="remove-all-btn" onClick={removeAllCart}>
                  remove all
                </button>
                {cartList.map((item) => (
                  <Basket
                    key={item._id}
                    item={item}
                    plusQunatity={plusQunatity}
                    muinsQuantity={muinsQuantity}
                    removeItem={removeItem}
                  />
                ))}
                <div className="checkout-total d-flex justify-content-between">
                  <h3>total : ${total.toFixed(2)}</h3>
                  <button className="btn btn-primary">checkout</button>
                </div>
              </Fragment>
            ) : (
              <h3>cart is empty</h3>
            )}
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default BasketList;

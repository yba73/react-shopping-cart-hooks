import React, { Fragment } from "react";

const Basket = (props) => {
  const { item, plusQunatity, muinsQuantity, removeItem } = props;

  return (
    <Fragment>
      <div className="basket-notification">
        <div className="content">
          <div className="basket-content">
            <img src={item.image} alt="img" />
            <div className="basket-body">
              <h5>{item.title}</h5>
              <div className="basket-action">
                <div className="basket-quantity">
                  <button
                    className="plus-quantity"
                    onClick={() => plusQunatity(item)}
                  >
                    +
                  </button>
                  <span>
                    quantity: <b>{item.quantity}</b>
                  </span>
                  <button
                    className="minus-qunatity"
                    onClick={() => muinsQuantity(item)}
                  >
                    -
                  </button>
                  <span>
                    price: <b>${(item.price * item.quantity).toFixed(2)}</b>
                  </span>
                </div>

                <button className="remove-btn" onClick={() => removeItem(item)}>
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Basket;

import React from "react";

import classes from "./CartItem.module.css";
import mobile from "../../../assests/images/mobile.jpg";
import InputComp from "../../Form/InputComp/InputComp";

const CartItems = ({ cartItems, onChangeQuantity, onDeleteItem }) => {
  const cartItemClass =
    classes.Cartitem +
    " d-flex border justify-content-center align-items-center";

  const displayCartItems = () => {
    return cartItems.length > 0 ? (
      cartItems.map((item) => {
        return (
          <div className="row " key={item.id}>
            <div className={cartItemClass + " col-3"}>
              <div className={classes.ProductImageContainer}>
                <img
                  src={mobile}
                  alt="mobileimage"
                  className={classes.ProductImage}
                />
              </div>
            </div>
            <div className={cartItemClass + " col-2"}>
              <span>{item.modelNumber}</span>
            </div>
            <div className={cartItemClass + " col-2"}>
              <InputComp
                type="number"
                value={item.quantity}
                handleChange={(qty) => onChangeQuantity(qty, item)}
              />
            </div>
            <div className={cartItemClass + " col-2"}>
              <span>$ {item.itemTotal}</span>
            </div>
            <div className={cartItemClass + " col-3"}>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <h4 className="row align-items-center justify-content-center">
        <span>Empty Cart</span>
      </h4>
    );
  };
  return displayCartItems();
};

export default CartItems;

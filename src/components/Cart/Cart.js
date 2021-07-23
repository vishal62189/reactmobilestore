import React, { useContext, useState } from "react";

import CartItems from "./CartItems/CartItems";
import classes from "./Cart.module.css";
import authContext from "../../context/authContext";
import { Modal, Button } from "react-bootstrap";

const Cart = ({ cartItems, onChangeQuantity, onDeleteItem }) => {
  const context = useContext(authContext);
  const [openFlag, setOpenFlag] = useState(false);
  const [modalBody, setModalBody] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const total =
    cartItems &&
    cartItems.reduce((agg, item) => {
      return agg + parseInt(item.itemTotal);
    }, 0);

  const cartHeadingClass =
    classes.Headings +
    " row justify-content-center align-items-center border font-weight-bold";

  const handleClose = () => setOpenFlag(false);

  const handlePlaceOrder = () => {
    setOpenFlag(true);
    if (context.isAuthenticated) {
      setModalTitle("Order placed successfully");
      setModalBody("Order ID : 434353432");
    } else {
      setModalTitle("Please login to place order");
      setModalBody("Click on Login button");
    }
  };
  return (
    <div className="container">
      <h2>Cart Details</h2>
      <div className="row ">
        <div className="col-3 border">
          <div className={cartHeadingClass}>Device</div>
        </div>
        <div className="col-2 border">
          <div className={cartHeadingClass}>Model</div>
        </div>
        <div className="col-2 border">
          <div className={cartHeadingClass}>Quantity</div>
        </div>
        <div className="col-2 border">
          <div className={cartHeadingClass}>Price</div>
        </div>
        <div className="col-3 border">
          <div className={cartHeadingClass} />
        </div>
      </div>
      <CartItems
        cartItems={cartItems}
        onChangeQuantity={onChangeQuantity}
        onDeleteItem={onDeleteItem}
      />
      <div className="my-5">
        <div className="d-flex justify-content-end   font-weight-bold ">
          <span>
            Total : <span className="pl-5">$ {total}</span>
          </span>
        </div>
        <button className="btn btn-primary mt-3" onClick={handlePlaceOrder}>
          Place order
        </button>
      </div>
      <Modal show={openFlag} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;

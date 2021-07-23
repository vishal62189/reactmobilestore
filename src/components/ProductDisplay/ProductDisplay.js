import React from "react";

import classes from "./ProductDisplay.module.css";
import mobile from "../../assests/images/mobile.jpg";

const ProductDisplay = ({ productItem, onAddCart }) => {
  const {
    deviceName,
    modelNumber,
    price,
    colors,
    screenSize,
    ram,
    storage,
    operatingSystem,
  } = productItem;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className={classes.ProductImageContainer}>
            <img
              src={mobile}
              alt="mobileimage"
              className={classes.ProductImage}
            />
          </div>
        </div>
        <div className="col-sm-6 pl-5">
          <div className="row mb-3 font-weight-bold">
            <span data-testid="deviceNameId">{deviceName}</span>
          </div>
          <div className="row mb-3 font-weight-bold">
            <span>Price :</span>
            <span className="pl-2" data-testid="priceId">
              $ {price}
            </span>
          </div>
          <div className="row mb-3">
            <span>Model Number :</span>
            <span className="pl-2"> {modelNumber}</span>
          </div>
          <div className="row mb-3">
            <span>Colors :</span>
            <span className="pl-2"> {colors}</span>
          </div>
          <div className="row mb-3">
            <span>Screen Size :</span>
            <span className="pl-2"> {screenSize}</span>
          </div>
          <div className="row mb-3">
            <span>Operating System :</span>
            <span className="pl-2"> {operatingSystem}</span>
          </div>
          <div className="row mb-3">
            <span>Ram :</span>
            <span className="pl-2"> {ram}</span>
          </div>
          <div className="row mb-3">
            <span>Storage :</span>
            <span className="pl-2"> {storage}</span>
          </div>
          <div className="row mb-3">
            <button
              className="btn btn-primary"
              onClick={() => onAddCart(productItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

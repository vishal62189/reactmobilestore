import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductListingItems.module.css";
import mobile from "../../../assests/images/mobile.jpg";

const ProductListingItems = ({ productItems, onAddCart }) => {
  const listingClassname = classes.ListingItems + " col-sm-3";

  const displayMobileList = () => {
    return productItems.length > 0 ? (
      productItems.map((item) => {
        return (
          <div className={listingClassname} key={item.id}>
            <div className="card">
              <div className={classes.ProductImageContainer + " card-img-top"}>
                <img
                  src={mobile}
                  alt="mobileimage"
                  className={classes.ProductImage}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{item.deviceName}</h5>
                <p className="card-text">
                  <span className="font-weight-bold">
                    Price : $ {item.price}
                  </span>
                </p>
                <Link
                  className="btn btn-primary m-1"
                  to={"/display/" + item.id}
                >
                  View
                </Link>
                <button
                  className="btn btn-primary m-1"
                  onClick={() => onAddCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h4 className="m-5">
        <span>No item found</span>
      </h4>
    );
  };
  return (
    <div className="row" data-testid="productItemsId">
      {displayMobileList()}
    </div>
  );
};

export default ProductListingItems;

import React, { useState } from "react";

import classes from "./ProductListing.module.css";
import ProductListingItems from "./ProductListingItems/ProductListingItems";

const ProductListing = ({ productItems, onAddCart, onFilter }) => {
  const [searchText, setSearchText] = useState("");
  const searchButtonClass =
    classes.SearchButton + " btn btn-outline-success ml-2";

  const handleSearchText = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  return (
    <div className="container">
      <div className="row ">
        <h2 className="col-sm-6 text-left">Mobiles</h2>
        <div className=" col-sm-6">
          <div className="row">
            <div className="d-flex col-sm-8">
              <input
                className="form-control col-sm-8"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={(e) => handleSearchText(e)}
              />
              <button
                className={searchButtonClass + " col-sm-4 "}
                onClick={() => onFilter(searchText)}
                type="button"
              >
                Search
              </button>
            </div>
            <div className="col-sm-4">
              <button
                className={searchButtonClass}
                onClick={() => onFilter(searchText, "desc")}
                type="button"
              >
                H to L
              </button>
              <button
                className={searchButtonClass}
                onClick={() => onFilter(searchText, "asc")}
                type="button"
              >
                L to H
              </button>
            </div>
          </div>
        </div>
      </div>
      <ProductListingItems productItems={productItems} onAddCart={onAddCart} />
    </div>
  );
};

export default ProductListing;

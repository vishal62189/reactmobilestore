import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

import ProductListing from "../../components/ProductListing/ProductListing";
import { checkProductExits, fetchProductitems } from "../../utility/utility";

const ProductListingContainer = () => {
  const history = useHistory();
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetchProductitems().then((data) => {
      setProductItems(data);
    });
  }, []);

  const handleFilter = (searchText, sortPattern) => {
    fetchProductitems(true, searchText, sortPattern).then((data) => {
      setProductItems(data);
    });
  };

  const handleAddCart = (productItem) => {
    checkProductExits(productItem).then((redirectFlag) => {
      if (redirectFlag) history.push("/cart");
    });
  };

  return (
    <ProductListing
      productItems={productItems}
      onAddCart={handleAddCart}
      onFilter={handleFilter}
    />
  );
};

export default ProductListingContainer;

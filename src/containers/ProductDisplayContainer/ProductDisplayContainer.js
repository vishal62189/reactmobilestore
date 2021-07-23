import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { checkProductExits, fetchProductitem } from "../../utility/utility";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";

const ProductDisplayContainer = () => {
  const history = useHistory();
  const [productItem, setProductItem] = useState({});
  useEffect(() => {
    const id = history.location.pathname.split("/display/")[1];
    fetchProductitem(id).then((data) => {
      setProductItem(data);
    });
  }, [history.location.pathname]);

  const handleAddCart = (productItem) => {
    checkProductExits(productItem).then((redirectFlag) => {
      if (redirectFlag) history.push("/cart");
    });
  };

  return <ProductDisplay productItem={productItem} onAddCart={handleAddCart} />;
};

export default ProductDisplayContainer;

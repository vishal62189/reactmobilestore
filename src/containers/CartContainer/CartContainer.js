import React, { useState, useEffect } from "react";

import Cart from "../../components/Cart/Cart";
import {
  checkProductExits,
  loadCart,
  cartItemDelete,
} from "../../utility/utility";

const CartContainer = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart().then((res) => {
      setCartItems(res);
    });
  }, []);

  const handleChangeQuantity = (qty, productItem) => {
    checkProductExits(productItem, qty).then((redirectFlag) => {
      if (redirectFlag) {
        loadCart().then((res) => {
          setCartItems(res);
        });
      }
    });
  };

  const handleDeleteItem = (id) => {
    cartItemDelete(id).then((data) => {
      if (data) {
        loadCart().then((res) => {
          setCartItems(res);
        });
      }
    });
  };
  return (
    <Cart
      cartItems={cartItems}
      onChangeQuantity={handleChangeQuantity}
      onDeleteItem={handleDeleteItem}
    />
  );
};

export default CartContainer;

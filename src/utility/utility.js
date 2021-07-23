import axios from "axios";

const addCart = (data) => {
  const url = data.inCart
    ? `http://localhost:4003/cart/${data.id}`
    : `http://localhost:4003/cart`;
  const method = data.inCart ? "PUT" : "POST";
  return axios({
    url,
    method,
    data,
  })
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

const calculateCartItem = (productItem, quantity) => {
  quantity = parseInt(quantity);
  if (productItem.quantity) {
    if (quantity) {
      productItem.quantity = quantity;
    } else {
      productItem.quantity = productItem.quantity + 1;
    }
    productItem.inCart = true;
  } else {
    productItem.quantity = 1;
    productItem.inCart = false;
    productItem.itemTotal = 0;
  }
  productItem.itemTotal = productItem.quantity * productItem.price;
  return productItem;
};

export const checkProductExits = async (productItem, qty) => {
  return axios({
    url: `http://localhost:4003/cart/${productItem.id}`,
    method: "GET",
  })
    .then(({ data }) => {
      return addCart(calculateCartItem(data, qty));
    })
    .catch(({ response }) => {
      if (
        response &&
        response.status === 404 &&
        response.statusText.includes("Not Found")
      ) {
        return addCart(calculateCartItem(productItem, qty));
      }
    });
};

export const loadCart = async () => {
  let { data } = await axios.get("http://localhost:4003/cart");
  return data;
};

export const cartItemDelete = async (id) => {
  let { data } = await axios.delete(`http://localhost:4003/cart/${id}`);
  return data;
};

export const fetchProductitem = async (id) => {
  let { data } = await axios.get(`http://localhost:4003/productItems/${id}`);
  return data;
};
export const fetchProductitems = async (filter, searchText, sortPattern) => {
  let url = `http://localhost:4003/productItems`;
  if (filter) {
    url = `http://localhost:4003/productItems?q=${searchText}&_sort=price&_order=${sortPattern}`;
  }
  let { data } = await axios.get(url);
  return data;
};

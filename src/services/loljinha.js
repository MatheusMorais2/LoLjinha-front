import axios from "axios";

function signUp(formData) {
  const promise = axios.post(
    `${process.env.REACT_APP_API}/auth/sign-up`,
    formData
  );
  return promise;
}
function login(formData) {
  const promise = axios.post(
    `${process.env.REACT_APP_API}/auth/login`,
    formData
  );
  return promise;
}

function getItems() {
  const promise = axios.get(`${process.env.REACT_APP_API}/`);

  return promise;
}

function getProduct({ id }) {
  const promise = axios.get(`${process.env.REACT_APP_API}/product/${id}`);
  return promise;
}

function putCart(id, token) {
  const config = { Authorization: `Bearer ${token}` };
  const promise = axios.put(
    `${process.env.REACT_APP_API}/cart/${id}`,
    {},
    { headers: config }
  );
  return promise;
}

function getCart(token, setProductArray) {
  const config = { authorization: `Bearer ${token}` };

  const promise = axios.get(`${process.env.REACT_APP_API}/cart`, {
    headers: config,
  });
  promise.then((response) => {
    setProductArray(response.data);
  });
  promise.catch((error) => console.log(error));
}

function confirmPurchase(token, productArray, setConfirmCode) {
  const config = { authorization: `Bearer ${token}` };

  const promise = axios.post(
    `${process.env.REACT_APP_API}/confirm-purchase`,
    { items: productArray },
    { headers: config }
  );
  promise.then((response) => {
    setConfirmCode(response.data);
  });
  promise.catch(() => alert("Compra nao confirmada, tente novamente"));
}

function clearCart(token, setUser) {
  const config = { authorization: `Bearer ${token}` };

  const promise = axios.put(`${process.env.REACT_APP_API}/cart/clear`, {
    headers: config,
  });
  promise.then((response) => setUser(response.data));
  promise.catch((error) => console.log("Error clearing cart: ", error));
}

export {
  signUp,
  login,
  getItems,
  getProduct,
  putCart,
  getCart,
  confirmPurchase,
  clearCart,
};

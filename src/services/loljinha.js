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

function getAllProduct() {
  const promise = axios.get(`${process.env.REACT_APP_API}/all`);
  return promise;
}

function getArmor() {
  const promise = axios.get(`${process.env.REACT_APP_API}/armor`);
  return promise;
}

function getWeapon() {
  const promise = axios.get(`${process.env.REACT_APP_API}/weapon`);
  return promise;
}

function getHeal() {
  const promise = axios.get(`${process.env.REACT_APP_API}/heal`);
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

function confirmPurchase(token, productArray, setConfirmCode, setUser) {
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

  const promise = axios.delete(
    `${process.env.REACT_APP_API}/cart/clear`,
    {
      headers: config,
    },
    { body: "" }
  );
  promise.then((response) => setUser(response.data));
  promise.catch((error) => console.log("Error clearing cart: ", error));
}

function addOne(id, user, setUser) {
  const token = user.token;

  const config = { authorization: `Bearer ${token}` };
  const promise = axios.post(
    `${process.env.REACT_APP_API}/cart/add/${id}`,
    {},
    { headers: config }
  );
  promise.then((response) => console.log(response.data));
  promise.catch((error) => console.log(error));
}

function removeOne(id, user, setUser) {
  const token = user.token;

  const config = { authorization: `Bearer ${token}` };
  const promise = axios.post(
    `${process.env.REACT_APP_API}/cart/remove/${id}`,
    {},
    { headers: config }
  );
  promise.then((response) => console.log(response.data));
  promise.catch((error) => console.log(error));
}

export {
  signUp,
  login,
  getItems,
  getProduct,
  getAllProduct,
  getArmor,
  getWeapon,
  getHeal,
  putCart,
  getCart,
  confirmPurchase,
  clearCart,
  addOne,
  removeOne,
};

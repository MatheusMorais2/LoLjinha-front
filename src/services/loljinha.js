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

export {
  signUp,
  login,
  getItems,
  getProduct,
  getAllProduct,
  getArmor,
  getWeapon,
  getHeal,
};

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

export { signUp, login, getItems, getProduct };

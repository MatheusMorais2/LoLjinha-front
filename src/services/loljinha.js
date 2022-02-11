import axios from "axios";
import UserContext from "../context/UserContext";
import { useContext } from "react";

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

function getItems(body) {
  const promise = axios.get(`${process.env.REACT_APP_API}/`);

  return promise;
}

export { signUp, login, getItems };

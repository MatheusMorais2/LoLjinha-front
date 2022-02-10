import axios from "axios";

function signUp(formData) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/auth/sign-up`,
    formData
  );
  return promise;
}
function login(formData) {
  const promise = axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
    formData
  );
  return promise;
}

export { signUp, login };

import axios from "axios";

export function actionLogIn(dataLogIn) {
  console.log(dataLogIn);
  return axios.post("/api/auth/login", dataLogIn).then((res) => {
    return res.data;
  });
}

export function actionSignUp(dataSignUp) {
  return axios.post("/api/auth/signup", dataSignUp).then((res) => {
    return res.data;
  });
}

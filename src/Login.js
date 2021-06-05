import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "./api"
import store from "./store"

export const Login = (props) => {
  console.log(localStorage.getItem("token"))
  const history = useHistory();




  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(event.target.email.value, event.target.password.value)
      console.log(token)
      history.push("/");
      console.log("После запроса", localStorage.getItem("token"))

      store.dispatch({type: "SET-TOKEN", token: token})
      console.log(store.getState())
      console.log(store.getToken())

    } catch (error) {
      console.error(error);
      console.log("Error logging in please try again");
      /*console.log(localStorage.getItem("token"))*/
    }
  };

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" type="password" placeholder="Password" />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

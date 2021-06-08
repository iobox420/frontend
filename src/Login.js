import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "./api";
import store from "./store";

export const Login = (props) => {
  console.log(localStorage.getItem("token"));
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(
        event.target.email.value,
        event.target.password.value
      );
      history.push("/");

      store.dispatch({ type: "SET-TOKEN", token: token });
      console.log(store.getState());
      /*console.log(store.getToken())*/
    } catch (error) {
      console.error(error);
      console.log("Error logging in please try again");
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

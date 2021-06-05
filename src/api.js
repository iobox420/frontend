const server = process.env.REACT_APP_API_SERVER;

export const login = (email, password) => {
  console.log("куки", localStorage.getItem("token"))
  return fetch(`${server}/api/login`, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  }).then((res) => {
    if (res.status === 200) {
      console.log("куки после запроса", localStorage.getItem("token"))
      return res.json().then((data) => {
        console.log("токен ответа с сервера",data.token)
        return data.token
      });
    } else {
      const error = new Error(res.error);
      throw error;
    }
  });
};

export const getSecret = () => {};

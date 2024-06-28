import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "antd";
import localStorageHelpers from "../../helpers/localStorageHelpers";
// import getToken from "../../helpers/getToken";
// import setToken from "../../helpers/setToken";
import styles from "./index.module.css";

const Authorization = () => {
  // console.log(localStorage.getItem("token"));
  // console.log(localStorageHelpers.getToken("token"));

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const dataUser = data;
    (async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      });

      const data = await response.json();
      console.log(data);
      localStorage.setItem("token", data.token);
      console.log(localStorage.getItem("token"));
      // console.log(`-----`);
      // localStorageHelpers.setToken(data.token);
      // console.log(localStorageHelpers.getToken("token"));
      navigate("/todo");
    })();
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.registration_form}
    >
      <div>
        <h1>Authorization</h1>
        <label>Email:</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Поле обязательно для заполнения",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          }}
          render={({ field }) => <Input {...field} placeholder="Email" />}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Password:</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 6,
              message:
                "Пароль должен быть не меньше 6 символов и содержать хотя бы одну заглавную букву",
            },
            validate: (letter) => {
              return (
                letter
                  .split("")
                  .filter((item) => !isFinite(item))
                  .map((item) => item === item.toUpperCase())
                  .includes(true) ||
                "Пароль должен содержать хотя бы одну заглавную букву"
              );
            },
          }}
          render={({ field }) => (
            <Input {...field} placeholder="Введите пароль" />
          )}
        />
        <p>{errors.password?.message}</p>
      </div>

      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
    </form>
  );
};

export default Authorization;

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Button } from "antd";
import setToken from "../../utils/setToken";
import getToken from "../../utils/getToken";
import styles from "./index.module.css";

const Registr = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const dataUser = data;
    (async () => {
      let response = await fetch(
        "https://todo-redev.herokuapp.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataUser),
        }
      );

      let data = await response.json();
      console.log(data);
      setToken(data.token);
      console.log(getToken("token"));
      // localStorage.setItem("token", data.token);
      // const yourToken = localStorage.getItem("token");
    })();
    console.log(JSON.stringify(data));

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

      {/* <Link to="/todo"> */}
      <Button type="primary" htmlType="submit">
        Sign In
      </Button>
      {/* </Link> */}

      <Link to="/todo">TODO</Link>
    </form>
  );
};

export default Registr;

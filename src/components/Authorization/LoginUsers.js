import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input, Radio, Button, Modal } from "antd";

const LoginUsers = () => {
  const [modal, contextHolder] = Modal.useModal();

  const countDown = () => {
    modal.success({
      title: "You have successfully registered!!!",
      content: "Click below to log in",
    });
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    const dataUser = data;
    (async () => {
      try {
        let response = await fetch(
          "https://todo-redev.herokuapp.com/api/users/register",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(dataUser),
          }
        );

        // if (!response.ok) {
        //   console.error("Запрос не удался");
        //   return;
        // }

        let data = await response.json();
        console.log(data);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
    console.log(JSON.stringify(data));
    console.log("Успешно зарегистрировано");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First name:</label>
        <Controller
          name="username"
          control={control}
          rules={{ required: "Поле обязательно для заполнения" }}
          render={({ field }) => <Input {...field} placeholder="Введите имя" />}
        />
        <p>{errors.text?.message}</p>
      </div>

      <div>
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
        <label>Gender:</label>
        <Controller
          name="gender"
          control={control}
          rules={{ required: "Выберите пол" }}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          )}
        />
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>Age:</label>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <Input type="number" {...field} placeholder="Число" />
          )}
        />
        <p>{errors.number?.message}</p>
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

      {/* <Button type="primary" htmlType="submit" disabled={!isValid}>
        Зарегистрироваться
      </Button> */}
      <Button
        onClick={countDown}
        type="primary"
        htmlType="submit"
        disabled={!isValid}
      >
        Register
      </Button>
      <br />
      <Link to="authorization">
        <Button type="primary">Log In</Button>
      </Link>
      {contextHolder}
    </form>
  );
};

export default LoginUsers;

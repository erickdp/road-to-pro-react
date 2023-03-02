import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  // debido al spread que realiza se desestructura user, em...
  const { formState, onInputChanage, onResetForm, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  // const { username, email, password } = formState; ya no es necesario

  useEffect(() => {
    console.log("useEffect called!");
  }, []);

  // react recomienda un useEffect para cada funcion q se quiere ejecutar cunado se renderize

  useEffect(() => {
    console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    console.log("email changed!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChanage}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="erickdp@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChanage}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contra"
        name="password"
        value={password}
        onChange={onInputChanage}
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>

      {username === "strider2" && <Message />}
    </>
  );
};

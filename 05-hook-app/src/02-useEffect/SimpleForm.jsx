import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "erickdp@mail",
  });

  const { username, email } = formState;

  const onInputChnage = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, // para hacer referencia a los valores del objeto es con [atribuo]
    });
  };


  useEffect(() => {
    console.log('useEffect called!')
  },[])
 
  // react recomienda un useEffect para cada funcion q se quiere ejecutar cunado se renderize

  useEffect(() => { 
    console.log('formState changed!')
  },[formState])


  useEffect(() => { 
    console.log('email changed!')
  },[email])

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
        onChange={onInputChnage}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="erickdp@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChnage}
      />

      {
        (username === 'strider2') && <Message />
      }

    </>
  );
};

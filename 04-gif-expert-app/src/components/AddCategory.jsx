import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("Breaking Bad");

  // desestructuración, al usar {}
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); // evita hacer refresh del navegador cada vez q se envia el form
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  // se puede enviar solo el form sin diamantes porq es el unico elemento
  // onSubmit={(e) => onSubmit(e)} es la forma larga
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

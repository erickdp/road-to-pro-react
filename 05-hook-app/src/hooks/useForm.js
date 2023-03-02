import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChanage = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value, // para hacer referencia a los valores del objeto es con [atributo]
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState, // desestructura los elementos del objeto
    formState,
    onInputChanage,
    onResetForm,
  };
};

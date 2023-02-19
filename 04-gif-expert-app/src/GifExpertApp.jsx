import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "Braking Bad"]); // 1ra forma
    setCategories((cat) => [newCategory, ...cat]); // 2da forma usando callback
  };


  return (
    <>
      <h1>GifEXpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory} // debe tener sentido semántico y además debe ser un evento tomado desde el padre
      />
        {categories.map((category) => ( // no usar el i (indice)
           <GifGrid key={category} category={category}/> // usando () defino que devuelve un objeto
        ))}
    </>
  );
};

import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, "Braking Bad"]); // 1ra forma
    setCategories((cat) => [newCategory, ...cat]); // 2da forma usando callback
  };

  console.log(categories);

  return (
    <>
      <h1>GifEXpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory} // debe tener sentido semántico y además debe ser un evento tomado desde el padre
      />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

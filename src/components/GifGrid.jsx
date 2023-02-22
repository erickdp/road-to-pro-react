import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>) // un and logico, si es true se ejecuta la segunda parte, caso contrario pasa
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            {...image} // se puede esparsir los datos de image
          />
        ))}
      </div>
    </>
  );
};

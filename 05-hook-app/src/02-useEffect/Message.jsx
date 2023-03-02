import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // un ejemplo con useEffect cuando no es montado
  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
      console.log(coords);
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      // para desmontar el evento se los debe de eliminar de la referencia en memoria en donde está esa función
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existente</h3>
      {JSON.stringify(coords)}
    </>
  );
};

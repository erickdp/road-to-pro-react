import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getImages = async (category) => {
    const images = await getGifs(category);
    setImages(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []); // este hook dice que solo se dispara getFifs cuando el componente se crea, es decir, cada q se agrega un nuevo gif

  return {
    images,
    isLoading,
  };
};

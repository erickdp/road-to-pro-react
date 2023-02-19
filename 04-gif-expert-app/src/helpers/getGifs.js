export const getGifs = async (category) => {
  const apiKey = "Q1qErt6x2OX6YgYiRwElBFmOIaxrRzz7";

  const url = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;

  const resp = await fetch(url);

  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};

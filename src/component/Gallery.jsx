import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "../Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}&`;
console.log(import.meta.env.VITE_API_KEY);
const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const response = useQuery({
    queryKey: ["imgs", searchValue],
    queryFn: async () => {
      const result = await axios.get(`${url}query=${searchValue}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <div className="image-container">
        <h3>loading ....</h3>
      </div>
    );
  }
  if (response.isError) {
    return (
      <div className="image-container">
        <h3>there was an error;</h3>
      </div>
    );
  }
  const result = response.data.results;
  // console.log(result);
  if (result.length < 1) {
    return (
      <div className="image-container">
        <h3>there is no image</h3>
      </div>
    );
  }

  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item.urls.regular;

        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;

import useFetch from "../services/useFetch.js";
import FavouriteDog from "./FavouriteDog.js";

const url = "http://localhost:4000/Favourites";

function Favourites() {
  const { data, loading, error } = useFetch(url);

  // loop through recived data over dog component
  if (data) {
    const Dogs = data;
    console.log(data);
    return (
      <div id="DogView">
        {Dogs.map((dog) => (
          <FavouriteDog Dog={dog.url} key={dog}></FavouriteDog>
        ))}
      </div>
    );
  }
}

export default Favourites;

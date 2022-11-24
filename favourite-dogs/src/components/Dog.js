import Button from "./Button.js";
import useFetch from "../services/useFetch.js";

const url = "https://random.dog/woof.json";

const Dog = ({ onClick }) => {
  const addToFavourites = async (Dog) => {
    const res = await fetch("http://localhost:4000/Favourites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Dog),
    });
    console.log(res);
    console.log("hi", Dog);
  };

  const { data, loading, error } = useFetch(url);

  if (data) {
    return (
      <div className="DogImageDiv">
        <div className="DogImage">
          <img id="heart" className="button" src={data.url} alt="dog" />
        </div>
        <div className="FavouriteButton">
          <Button
            color="#11111"
            text={"Add to Favourites"}
            onClick={() => addToFavourites(data)}
          ></Button>
        </div>
      </div>
    );
  }
};

export default Dog;

import Dog from "./Dog.js";
import FavouriteDog from "./FavouriteDog.js";

const listSize = 6;

const DogsView = ({ Dogs, view }) => {
  if (view == "random") {
    return (
      <div id="DogView">
        {Dogs.map((count) => (
          <Dog key={count}></Dog>
        ))}
      </div>
    );
  }
};

DogsView.defaultProps = {
  Dogs: [...Array(listSize).keys()],
  view: "random",
};

export default DogsView;

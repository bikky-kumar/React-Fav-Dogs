const FavouriteDog = ({ Dog }) => {
  console.log("favourite Dog");
  return (
    <div className="DogImageDiv">
      <div className="DogImage">
        <img id="heart" className="button" src={Dog} alt="dog" />
      </div>
    </div>
  );
};

export default FavouriteDog;

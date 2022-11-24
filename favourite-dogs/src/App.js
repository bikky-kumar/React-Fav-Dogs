import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
//import DogsView from "./components/DogsView.js";
import DogsView from "./components/DogsView.js";
import Button from "./components/Button";
import Favourites from "./components/Favourites";
import FavouriteDog from "./components/FavouriteDog";

function App() {
  const refresh = () => {
    window.location.reload();
    console.log("refresh");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="Container">
            <Header title="Favourite  Dogs" />
            <DogsView></DogsView>
            <Button
              id="RefreshButton"
              color="#11111"
              text="Refresh"
              onClick={refresh}
            ></Button>
          </div>
        }
      ></Route>
      <Route
        path="/favourites"
        element={
          <div className="Container">
            <Header title="Favourite  Dogs" />
            <Favourites></Favourites>
          </div>
        }
      ></Route>
    </Routes>
  );
}

export default App;

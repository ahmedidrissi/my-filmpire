import { useState, useEffect } from "react";
import { API_KEY } from "../.env/keys";

const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

function App() {

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("batman");
  }, []);

  return <div>App</div>;
}

export default App;

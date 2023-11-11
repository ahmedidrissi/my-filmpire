import { useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

function App() {
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return <div>App</div>;
}

export default App;

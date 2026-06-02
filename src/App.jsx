import React from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";

function App() {
  const [movies, setMovies] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [favorites, setFavorites] = React.useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      handleSearchSubmit();
    }
  };

  const [showFavorites, setShowFavorites] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const exists = favorites.find((fav) => fav.imdbID === movie.imdbID);

    if (exists) {
      setFavorites(favorites.filter((fav) => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      setLoading(true);

      const response = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: "da656264",
          s: searchQuery,
        },
      });

      setMovies(response.data.Search || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Random Movies on Page Load
  const fetchRandomMovies = async () => {
    try {
      setLoading(true);

      const randomKeywords = [
        "batman",
        "avengers",
        "spider",
        "harry",
        "star",
        "fast",
        "mission",
        "matrix",
        "john",
        "iron",
      ];

      const randomKeyword =
        randomKeywords[Math.floor(Math.random() * randomKeywords.length)];

      const response = await axios.get("http://www.omdbapi.com/", {
        params: {
          apikey: "da656264",
          s: randomKeyword,
        },
      });

      setMovies(response.data.Search || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchRandomMovies();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        handleKeyDown={handleKeyDown}
        favorites={favorites}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />

      <MovieGrid
        loading={loading}
        movies={showFavorites ? favorites : movies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MoviesList from "../../components/MoviesList/MoviesList";
import css from "./HomePage.module.css";
import { getTrendMovies } from "../../api.js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setLoading(true);
        const trendMovies = await getTrendMovies();
        // console.log(trendMovies);
        setMovies(trendMovies);
      } catch (error) {
        setError(true);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, []);
  return (
    <div className={css.homePage}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}

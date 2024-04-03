import { useState, useMemo, useEffect } from "react";
import { getSearchMovies } from "../../api.js";
import css from "./MoviesPage.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MoviesList from "../../components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [params] = useSearchParams();
  const searchMovieFilter = params.get("query") ?? "";

  useEffect(() => {
    if (searchMovieFilter === "") {
      return;
    }
    const handleMovieSearch = async () => {
      try {
        setLoader(true);
        const searchMovies = await getSearchMovies(searchMovieFilter);
        setMovies(searchMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    handleMovieSearch();
  }, [searchMovieFilter]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchMovieFilter.toLowerCase())
    );
  }, [movies, searchMovieFilter]);

  return (
    <div className={css.moviesPage}>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar />
      {movies.length > 0 && <MoviesList movies={filteredMovies} />}
    </div>
  );
}

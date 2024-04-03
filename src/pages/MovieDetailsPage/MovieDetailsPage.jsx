import { Suspense, useEffect, useRef, useState } from "react";
import css from "./MovieDetailsPage.module.css";
import {
  Outlet,
  NavLink,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import { getMoviesById } from "../../api.js";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import clsx from "clsx";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const classes = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    async function fetchMoviesById() {
      try {
        setError(false);
        setLoading(true);
        const movieById = await getMoviesById(movieId);
        setMovie(movieById);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesById();
  }, [movieId]);

  return (
    <div className={css.movieDetailsPage}>
      <Link to={backLinkRef.current}>Go back</Link>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}

      <p className={css.info}>Additional information:</p>
      <ul className={css.list}>
        <li>
          <NavLink className={classes} to="cast">
            Movie Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={classes} to="reviews">
            Movie Review
          </NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading sub component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

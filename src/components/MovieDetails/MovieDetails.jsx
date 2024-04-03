import css from "./MovieDetails.module.css";
export default function MovieDetails({ movie }) {
  return (
    <>
      <div className={css.poster}>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      </div>
      <div className={css.details}>
        <h2>{movie.title}</h2>
        <p>Overview: {movie.overview}</p>
        <p>Genres: {movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
    </>
  );
}

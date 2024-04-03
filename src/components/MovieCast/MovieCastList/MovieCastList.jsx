import MovieCastItem from "./MovieCastItem/MovieCastItem";
import css from "./MovieCastList.module.css";

export default function MovieCastList({ movieCast }) {
  return (
    <ul className={css.list}>
      {movieCast.map((actor) => (
        <li className={css.item} key={actor.id}>
          <MovieCastItem actor={actor} />
        </li>
      ))}
    </ul>
  );
}

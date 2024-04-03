import css from "./MovieCastItem.module.css";
export default function MovieCastItem({ actor }) {
  return (
    <div>
      <div className={css.imageWrapper}>
        <img
          className={css.image}
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
        />
      </div>
      <p className={css.name}>{actor.name}</p>
    </div>
  );
}

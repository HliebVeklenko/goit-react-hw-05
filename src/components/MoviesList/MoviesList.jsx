import MovieItem from "../MovieItem/MovieItem";

export default function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        );
      })}
    </ul>
  );
}

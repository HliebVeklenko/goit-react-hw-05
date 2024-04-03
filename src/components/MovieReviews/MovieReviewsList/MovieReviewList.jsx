import MovieReviewItem from "./MovieReviewItem/MovieReviewItem";
import css from "./MovieReviewList.module.css";

export default function MovieReviewsList({ reviews }) {
  return (
    <ul className={css.list}>
      {reviews.map((review) => (
        <li key={review.id}>
          <MovieReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}

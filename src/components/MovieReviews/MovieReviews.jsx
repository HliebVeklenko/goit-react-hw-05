import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api.js";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieReviewsList from "./MovieReviewsList/MovieReviewList";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setError(false);
        setLoading(true);
        const review = await getMovieReviews(movieId);
        setReviews(review);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {reviews.length === 0 && !error && !loading && <p>No reviews yet...</p>}
      <MovieReviewsList reviews={reviews} />
    </div>
  );
}

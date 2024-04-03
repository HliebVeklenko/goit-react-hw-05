export default function MovieReviewItem({ review }) {
  return (
    <div>
      <h2>Author: {review.author}</h2>
      <p>{review.content}</p>
    </div>
  );
}

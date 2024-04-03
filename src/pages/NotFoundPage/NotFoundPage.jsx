import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>404 | Not found...</h2>
      <Link to="/">Back to Home page!</Link>
    </div>
  );
}

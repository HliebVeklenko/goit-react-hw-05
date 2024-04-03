import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../src/components/Navigation/Navigation";

const HomePage = lazy(() => import("../src/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../src/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../src/pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../src/pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

import "./App.css";

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

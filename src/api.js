import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const apiParams = {
  language: "en",
  api_key: "ac745e406ee3f48a4cc47b3f2ef525ef",
};

const apiHeaders = {
  Authorization:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzc0NWU0MDZlZTNmNDhhNGNjNDdiM2YyZWY1MjVlZiIsInN1YiI6IjY2MGQ2ZThjZTAzOWYxMDE2MmU1ZGIwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iQIkQvyH5Ph7as_wKKGKgabUj9CqwBM1lfwnXKwOeXU",
};

export const getTrendMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    params: apiParams,
    headers: apiHeaders,
  });
  return response.data.results;
};

export const getSearchMovies = async (searchQuery) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: searchQuery,
      language: "en",
      api_key: "ac745e406ee3f48a4cc47b3f2ef525ef",
    },
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTJmZGI2ZGU2Mjk0ZGUyNTIyYTk0ZWE2OTNmMzAyZCIsInN1YiI6IjY1ZWMzM2FhOTQ0YTU3MDE2NGJlNmMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lu-QU6jwYaUZnU3BHNbu8C665m_Hb84pqaZk_knFEpk",
    },
  });
  return response.data.results;
};

export const getMoviesById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: apiParams,
    headers: apiHeaders,
  });
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: apiParams,
    headers: apiHeaders,
  });
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: apiParams,
    headers: apiHeaders,
  });
  return response.data.results;
};

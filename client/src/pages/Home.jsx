import { useQuery } from '@apollo/client';
import MovieList from '../components/MovieList';
import { QUERY_MOVIES } from '../utils/queries';

const Home = () => {
  const { loading, error, data } = useQuery(QUERY_MOVIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allMovies = data.movies;

  // Group all movies by genre
  const moviesByGenre = {};
  allMovies.forEach(movie => {
    movie.genre.forEach(genre => {
      if (!moviesByGenre[genre]) {
        moviesByGenre[genre] = [];
      }
      moviesByGenre[genre].push(movie);
    });
  });

  return (
    <main>
      <div className="flex-row justify-center">
        {/* Render movies by genre */}
        {Object.entries(moviesByGenre).map(([genre, movies]) => (
          <div className="movie-row" key={genre}>
            <h2>{genre}</h2>
            <MovieList movies={movies} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

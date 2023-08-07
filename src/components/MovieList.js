import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
  return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
    );
};

export default MovieList;

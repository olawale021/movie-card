import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Power',
      description: 'Power Ghost: A gripping tale of ambition, betrayal, and supernatural forces intertwining with street power struggles.',
      posterURL: 'https://variety.com/wp-content/uploads/2020/08/power-book-ii-ghost-e1596577759433.jpg',
      rating: 9.5,
    },
    {
      title: 'Blacklist',
      description: 'Intense crime drama following a former government agent seeking justice, loyalty, and redemption. The Blacklist.',
      posterURL: 'https://m.media-amazon.com/images/I/81y3TSt9KTL._RI_.jpg',
      rating: 9.0,
    },
    {
      title: 'Black Mafia Family',
      description: "BMF on Starz: A gripping crime drama depicting the rise of Detroit's infamous Black Mafia Family.",
      posterURL: 'https://stz1.imgix.net/web/contentId/62264/type/KEY/dimension/1200x1600/lang/en-US?auto=compress,format',
      rating: 8.7,
    },
    {
      title: 'Arrow',
      description: 'Action-packed vigilante drama with a wealthy playboy-turned-hero fighting crime with his archery skills',
      posterURL: 'https://tvmoviecards.com/cdn/shop/products/img20221117_11143566_512x475.jpg?v=1668705386',
      rating: 8.5,
    },
    {
      title: 'Manifest',
      description: 'Thrilling mystery unravels after passengers of a vanished flight reappear unaged, seeking answers and redemption.',
      posterURL: 'https://www.darkmatterzine.com/wp-content/uploads/2022/02/ygwna3iow6geokec_1627098970.jpeg',
      rating: 9.0,
    },
    {
      title: 'Top Boy',
      description: 'Riveting drama, captivating characters, thrilling plots. Top TV series deliver unparalleled entertainment and storytelling.',
      posterURL: 'https://images.squarespace-cdn.com/content/v1/51eed611e4b095302497fd81/1587599024191-PP3M6IMYRLJT9K0PTBFT/TopBoy_OOH_V1_1000px.jpg?format=1500w',
      rating: 7.9,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilterChange = (field, value) => {
    // Convert the value to lowercase for case-insensitive filtering
    const lowercaseValue = value.toLowerCase();
  
    // Filter the movies based on the given field and value
    const filtered = movies.filter((movie) => {
      // If the field doesn't exist in the movie object, return false to filter it out
      if (!movie.hasOwnProperty(field)) {
        return false;
      }
  
      // Get the movie field value and convert it to lowercase for case-insensitive comparison
      const fieldValue = movie[field].toString().toLowerCase();
  
      // Check if the fieldValue contains the lowercaseValue
      return fieldValue.includes(lowercaseValue);
    });
  
    // Update the filtered movies state
    setFilteredMovies(filtered);
  };
  

  return (
    <div className="App">
      <h1>My Favorite Movies</h1>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

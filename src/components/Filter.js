import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title..."
        onChange={(e) => onFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating..."
        onChange={(e) => onFilterChange('rating', e.target.value)}
      />
    </div>
  );
};

export default Filter;

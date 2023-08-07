import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import '../App.css';


const MovieCard = ({ movie }) => {
    const Navigate = useNavigate();
const { id, title, description, posterURL, rating } = movie;

return (
    
        <div className="movie-card" >
            <Link to={`/description/${id}`}> <img src={posterURL} alt={title} /></Link>
            <h2>{title}</h2>
            <p className='desc'>{description}</p>
            <p className='rating'>Rating: {rating}</p>
        </div>
    
    );
};

export default MovieCard;
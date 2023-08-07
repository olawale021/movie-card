import React from "react";
import { useParams, Link } from "react-router-dom";
import { movies } from "./data/movies";
import '../App.css';


const DescriptionPage = () => {
    const params = useParams();
    const movie = movies.find((movie) => movie.id === params.id);

    console.log('Para', params)
    console.log('Para', movie)
    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <div className="desc-container">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                {/* Display the embedded trailer */}
                <iframe
                    title="Movie Trailer"
                    width="560"
                    height="315"
                    src={movie.trailerLink}
                    allowFullScreen
                ></iframe>
            </div>
            <div><Link className="back-btn" to="/">Back to Home</Link></div>
        </div>
    );
};

export default DescriptionPage;
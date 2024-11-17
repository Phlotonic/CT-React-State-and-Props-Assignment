import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Sci-Fi', description: 'A thief who steals corporate secrets through the use of dream-sharing technology.', showDetails: false },
        { title: 'The Dark Knight', genre: 'Action', description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.', showDetails: false },
        { title: 'Interstellar', genre: 'Sci-Fi', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', showDetails: false }
    ]);

    const [showAction, setShowAction] = useState(false);

    // Function to toggle movie details
    const toggleDetails = (index) => {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };

    // Function to remove a movie from the list
    const removeMovie = (index) => {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
    };

    // Function to toggle the view between all movies and action movies
    const toggleView = () => {
        setShowAction(!showAction);
    };

    return (
        <div>
            <h1>Favorite Movies</h1>
            <button onClick={toggleView}>
                {showAction ? 'Show All Movies' : 'Show Action Movies'}
            </button>
            <ul>
                {movies
                    .filter(movie => !showAction || movie.genre === 'Action')
                    .map((movie, index) => (
                        <li key={index}>
                            <span onClick={() => toggleDetails(index)}>{movie.title}</span>
                            {/* Conditional rendering of movie details */}
                            {movie.showDetails && <p>{movie.description}</p>}
                            {/* Button to remove the movie */}
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;

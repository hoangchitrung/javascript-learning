import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import { Link } from "react-router-dom";

function Movies() {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        const res = await getMovies();
        setMovies(res.data);
    };
    useEffect(() => {
        fetchMovies();
    }, []);
    const handleDelete = async (id) => {
        await deleteMovie(id);
        fetchMovies();
    };

    return (
        <div>
            <h2>Movie List</h2>
            <Link to="/add">Add Movie</Link>
            {movies.map((movie) => (
                <div key={movie._id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <Link to={`/edit/${movie._id}`}>Edit</Link>
                    <button onClick={() => handleDelete(movie._id)}>
                        Delete
                    </button>
                </div>
            ))}

        </div>
    );
}
export default Movies;
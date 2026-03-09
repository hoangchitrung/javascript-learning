import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState("All");
    const [page, setPage] = useState(1);

    const limit = 8;

    const fetchMovies = async () => {
        const res = await getMovies();
        setMovies(res.data);
    };
    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        setPage(1);
    }, [genre]);
    const handleDelete = async (id) => {
        await deleteMovie(id);
        fetchMovies();
    };

    const filteredMovies = movies.filter(movie =>
        genre === "All" ? true : movie.genre === genre

    );

    const totalPages = Math.ceil(filteredMovies.length / limit);
    const start = (page - 1) * limit;
    const paginatedMovies = filteredMovies.slice(start, start + limit);

    return (
        <div>
            <Navbar genre={genre} onGenreChange={setGenre} />
            <h2>Movie List</h2>
            <Link to="/add">Add Movie</Link>
            {paginatedMovies.map((movie) => (
                <div key={movie._id}>
                    <img src={movie.image} />
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <Link to={`/edit/${movie._id}`}>Edit</Link>
                    <button onClick={() => handleDelete(movie._id)}>
                        Delete
                    </button>
                </div>
            ))}
            {totalPages > 1 && (
                <nav className="mt-4">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            >
                                Previous
                            </button>
                        </li>

                        {[...Array(totalPages)].map((_, index) => (
                            <li
                                key={index}
                                className={`page-item ${page === index + 1 ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}

                        <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                            <button
                                className="page-link"
                                onClick={() => setPage(page + 1)}
                                disabled={page === totalPages}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
}
export default Movies;
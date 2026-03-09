import { Link, useNavigate } from "react-router-dom";

function Navbar({ genre, onGenreChange }) {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");

        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <div className="container">
                <Link className="navbar-brand" to={"/movies"}>Movie App</Link>
                <div className="navbar-nav">
                    <Link className="nav-link" to={"/movies"}>
                        Genre
                    </Link>
                    <select className="form-select w-auto mb-3" style={{ minWidth: "150px" }} value={genre} onChange={(e) => onGenreChange(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Action">Action</option>
                        <option value="Drama">Drama</option>
                        <option value="Comedy">Comedy</option>
                    </select>
                </div>
                <button className="btn btn-outline-light" onClick={logout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
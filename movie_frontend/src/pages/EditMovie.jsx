import { useEffect, useState } from "react";
import { getMovieById, updateMovie } from "../services/movieService";
import { useParams, useNavigate } from "react-router-dom";

function EditMovie() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ title: "", description: "" });

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await getMovieById(id);
            setForm(res.data);

        };
        fetchMovie();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateMovie(id, form);
        navigate("/movies");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Movie</h2>
            <input
                value={form.title}
                onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                }
            />
            <textarea
                value={form.description}
                onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                }
            />
            <button type="submit">Update</button>
        </form>
    );
}

export default EditMovie;
import { useState } from "react";
import { createMovie } from "../services/movieService";
import { useNavigate } from "react-router-dom";

function AddMovie() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        genre: "",
        releaseYear: ""
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMovie({
                ...form,
                releaseYear: Number(form.releaseYear)
            });
            navigate("/movies");
        } catch (err) {
            console.error(err.response?.data);

            alert("Error creating movie");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Movie</h2>
            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                }
            />
            <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                }
            />
            <input
                placeholder="Genre"
                value={form.genre}
                onChange={(e) =>
                    setForm({ ...form, genre: e.target.value })
                }
            />

            <input

                type="number"
                placeholder="Release Year"
                value={form.releaseYear}
                onChange={(e) =>
                    setForm({ ...form, releaseYear: e.target.value })
                }
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default AddMovie;
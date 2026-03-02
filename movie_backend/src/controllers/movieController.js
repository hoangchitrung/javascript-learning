import {
    getAllMovies,
    getMovieByIdService,
    createMovieService,
    updateMovieService,
    deleteMovieService
} from "../services/movieService.js";

// GET /movies
export const getMovies = async (req, res) => {
    try {
        const movies = await getAllMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// GET /movies/:id
export const getMovieById = async (req, res) => {

    try {
        const movie = await getMovieByIdService(req.params.id);
        if (!movie)
            return res.status(404).json({ message: "Movie not found" });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// POST /movies
export const createMovie = async (req, res) => {
    try {
        const movie = await createMovieService(req.body, req.user._id);
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// PUT /movies/:id
export const updateMovie = async (req, res) => {
    try {
        const movie = await updateMovieService(req.params.id, req.body);
        if (!movie)
            return res.status(404).json({ message: "Movie not found" });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });

    }
};

// DELETE /movies/:id
export const deleteMovie = async (req, res) => {
    try {
        const movie = await deleteMovieService(req.params.id);
        if (!movie)
            return res.status(404).json({ message: "Movie not found" });
        res.json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
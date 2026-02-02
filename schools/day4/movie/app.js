const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Log middleware
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
})

let movies = [
    { id: 1, name: "Fate/stay night", description: "fate stay night series", rating: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdPtUguVz0yhQW3SG46DA_L6R933J6D__VavJpMg15zg-LenhLZet4okab2veZdmnr5QLvA&s=10" },
    { id: 2, name: "Fate/Zero Night", description: "fate stay night series", rating: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdPtUguVz0yhQW3SG46DA_L6R933J6D__VavJpMg15zg-LenhLZet4okab2veZdmnr5QLvA&s=10" }
];


// get movies
app.get("/movies", (req, res) => {
    return res.json(movies);
});

// get movies details
app.get("/movies/:id", (req, res) => {
    const movie = movies.find(m => m.id === Number(req.params.id));

    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    return res.json(movie);
});

// add movies
app.post("/movies", (req, res) => {
    const { name, description, rating, image } = req.body;

    if (!name || !description || !rating || !image) {
        return res.status(400).json({ message: "Missing data" });
    }

    const newMovie = {
        id: Date.now(),
        name,
        description,
        rating,
        image
    };

    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// update movie
app.put("/movies/:id", (req, res) => {
    const movie = movies.find(m => m.id === Number(req.params.id));
    if (!movie) {
        return res.status(401).json({ message: "Movie not found" });
    }

    const { name, description, rating, image } = req.body;
    if (name) movie.name = name;
    if (description) movie.description = description;
    if (rating) movie.rating = rating;
    if (image) movie.image = image;

    res.json({
        message: "Movie updated",
        movie
    });
});

// delete movie
app.delete("/movies/:id", (req, res) => {
    const movieId = Number(req.params.id);
    const movieExist = movies.some(m => m.id === movieId);

    if (!movieExist) {
        return res.status(404).json({ message: "Movie not found" });
    }

    movies = movies.filter(m => m.id !== movieId);
    res.json({ message: "Movie Deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("Server is running at port 3000")
});
import Movie from "../models/Movie.js";

// Get all movies
export const getAllMovies = async () => {
    return await Movie.find().populate("createdBy", "name email");
};

// Get movie by id
export const getMovieByIdService = async (id) => {
    return await Movie.findById(id);
};

// Create movie
export const createMovieService = async (data, userId) => {
    return await Movie.create({
        ...data,
        createdBy: userId
    });
};

// Update movie
export const updateMovieService = async (id, data) => {
    return await Movie.findByIdAndUpdate(
        id,
        data,
        { new: true, runValidators: true }
    );
};

// Delete movie
export const deleteMovieService = async (id) => {
    return await Movie.findByIdAndDelete(id);
};
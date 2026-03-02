import express from "express";
import {
    getMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
} from "../controllers/movieController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/roleMiddleware.js";
const router = express.Router();
// router.get("/", protect, getMovies);
router.get("/", getMovies);
router.get("/:id", protect, getMovieById);
router.post("/", protect, authorize("admin"), createMovie);
router.put("/:id", protect, authorize("admin"), updateMovie);
router.delete("/:id", protect, authorize("admin"), deleteMovie);
export default router;  
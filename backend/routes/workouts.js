const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

// require auth for all workout routes
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.use(requireAuth);

//GET all workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a new workout
router.post("/", createWorkout);

//DELETE a new workout
router.delete("/:id", deleteWorkout);

//PATCH a new workout
router.patch("/:id", updateWorkout);

module.exports = router;

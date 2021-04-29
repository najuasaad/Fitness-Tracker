// require in router and model
const router = require('express').Router();
const db = require("../models")

// addExercise
/* app.put("/api/workouts/:id", ({body}, res) => {
  
}) */

// getLastWorkout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .populate("Exercise")
  .then(dbWorkout => {
    console.log(dbWorkout)
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err)
  })
})

/* // createWorkout
app.post("/api/workouts", (req, res) => {

})

// getWorkoutsInRange
app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .populate("Exercise")
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err)
  })
}) */

// export router
module.exports = router;
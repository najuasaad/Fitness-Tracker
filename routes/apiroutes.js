// require in router and model
const router = require('express').Router();
const db = require("../models")

// addExercise
/* router.put("/api/workouts/:id", ({body}, res) => {
  db.Exercise.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } } , { new: true}))
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.json(err)
    })
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
router.post("/api/workouts", (req, res) => {

})

// getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
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
// require in router and model
const router = require('express').Router();
const db = require("../models")

// addExercise
router.put("/api/workouts/:id", (req, res) => {
  id = req.params.id
  db.Workout.findOneAndUpdate({ "_id": id}, { $push: { exercises: req.body } } , { new: true})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.json(err)
  })
})


// getLastWorkout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  // creates new field with total time calculated
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: {$sum: "$exercises.duration"},
      }
    }
  ])
  .then(dbWorkout => { 
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err)
  })
})

// createWorkout
router.post("/api/workouts", ({body}, res) => {
  db.Workout.create(body)
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err)
  })
})


//getWorkoutsInRange
// this is the stats page
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch(err => {
    res.json(err)
  })
})

// export router
module.exports = router;
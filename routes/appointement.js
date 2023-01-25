const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();
const verify = require ('./verifytoken');

router.post("/",verify, async (req, res) => {
  const appointment = new Appointment(req.body);
  try {
    const savedAppointment = await appointment.save();
    console.log(req.body);
    res.json(savedAppointment);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const allAppointment = await Appointment.find();
    res.json(allAppointment);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    Service.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

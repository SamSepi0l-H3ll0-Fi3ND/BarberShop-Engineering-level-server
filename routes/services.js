const express = require("express");
const router = express.Router();
const Service = require("../models/Service");
const verify = require ('./verifytoken');

router.post("/",verify, async (req, res) => {
  const service = new Service(req.body);
  try {
    const savedService = await service.save();
    console.log(req.body);
    res.json(savedService);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const allServices = await Service.find();
    res.json(allServices);
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

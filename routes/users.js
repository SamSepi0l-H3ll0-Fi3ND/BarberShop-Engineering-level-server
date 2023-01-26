const express = require("express");
const { find } = require("../models/User");

const router = express.Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params._id);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/userprofile", async (req, res) => {
  try {
    const currentUser = await User.findById(req.cookies._id);
    res.json(currentUser);
  } catch (error) {
    res.json({ message: error });
  }
});
router.put("/", async (req, res) => {
  try {
    const editUser = await User.findByIdAndUpdate(req.body._id, req.body);
    res.json(editUser);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/userlist/:userId", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.userId);
    res.json(deleteUser);
  } catch (error) {
    res.json({ message: error });
  }
});
router.post("/favorite/:userId", async (req, res) => {
  try {
    console.log(req.params.userId);

    const finduser = await User.findById(req.params.userId);
    finduser.favorite.push(req.body);

    finduser.save();

    res.json("Favorite");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

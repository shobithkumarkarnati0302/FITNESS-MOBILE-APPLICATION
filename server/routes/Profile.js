import express from "express";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET Profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// PUT Update Profile
router.put("/profile", authMiddleware, async (req, res) => {
  try {
    const { name, email, height, weight, age, gender } = req.body;
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    user.name = name;
    user.email = email;
    user.height = height;
    user.weight = weight;
    user.age = age;
    user.gender = gender;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/favourites",authMiddleware,async(req,res)=>{
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json(user.favourites);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
})

router.post("/favourites",authMiddleware,async(req,res)=>{
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.favourites.push(req.body.id);
    await user.save();
    res.status(200).json(user.favourites);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
})

router.delete("/favourites",authMiddleware,async(req,res)=>{
  try {
    const user = await User.findById(req.user.id).select("-password");
    user.favourites.pull(req.body.id);
    await user.save();
    res.status(200).json(user.favourites);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
})

export default router;

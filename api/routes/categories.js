const Category = require("../models/Category.js");
const express = require("express");
const { route } = require("./products.js");
const router = express.Router();

router.get("/get-category", async (req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.put("/update-category", async (req,res) => {
    try {
        await Category.findOneAndUpdate({ _id: req.body.categoryId}, req.body);
        res.status(200).json("Başarılı bir şekilde değiştirildi.")
    } catch (error) {
        res.status(400).json(error)
    }
});

router.delete("/delete-category", async (req,res) => {
    try {
        await Category.findOneAndDelete({ _id: req.body.categoryId});
        res.status(200).json("Başarılı bir şekilde silindi.")
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Başarılı bir şekilde eklendi.")
  } 
  catch (error) {
    res.status(400).json(error)
  }
});

module.exports = router;
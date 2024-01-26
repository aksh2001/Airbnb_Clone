const express = require('express');

const Category = require("../Model/category.model");
const categories = require("../data/category");

const router = express.Router();

router.route("/").post(async (req, res) => {
        try{
            await Category.deleteMany();
            const categoriesInDB = await Category.insertMany(category.data);
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add data to DB"})
        }
    })

module.exports = router;
const express = require('express');
const router = express.Router();

const Category = require("../Model/category.model");


router.route("/").get(async (req,res)=>{ //http://localhost::3500/api/category
    try{
        const categories = await Category.find({});
        res.json(categories)
    }catch(err){
        res.status(404).json({message: "Error"})
    }
})

module.exports = router;
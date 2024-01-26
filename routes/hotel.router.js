const express = require('express');
const router = express.Router();

const Hotel = require("../Model/hotel.model");


router.route("/").get(async (req,res)=>{ //localhost:3500/api/hotels/hotelCategory
    const hotelCategory = req.query.category   //http://localhost::3500/qpi/hotels?category=National+Park
    try{
        let hotels
        if(hotelCategory){
            hotel = await Hotel.find({category: hotelCategory})
        }else{
            hotels = await Hotel.find({});
        }
        hotels ? res.json(hotels) : res.status(404).json({message: "No data found"}) 
    }catch(err){
        console.log(err)
    }
})


module.exports = router;
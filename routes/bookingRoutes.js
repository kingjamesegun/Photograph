const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

// Create new booking
router.post("/", async (req, res)=>{
    const newBooking = new Booking(req.body);
    try{
        const savedBooking = await newBooking.save();
        res.status(200).json(savedBooking);
    }catch(err){
        res.status(500).json(err);
    }
 
});

// GET BOOKING
router.get("/", async (req, res)=>{
    try{
        const allBooking = await Booking.find();
        res.status(200).json(allBooking);

    }catch(err){
        res.status(500).json(err);
    }
 
});

// UPDATE BOOKING
router.put("/:id", async (req, res)=>{
    try{
        const {id} = req.params;
        Booking.findByIdAndUpdate(id, req.body, (err, updatedBooking)=>{
            if(err){
                res.status(500).json(err);
            }
            else{
                res.status(200).json(updatedBooking)
            }
        } )

    }catch(err){
        res.status(500).json(err);
    }
});

// DELETE BOOKING
router.delete("/:id", async(req, res)=>{
    try{
        const post = await Booking.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        }else{
            res.status(403).json("You can't delete this post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
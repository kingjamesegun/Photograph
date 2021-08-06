const express = require("express");
const router = express.Router();
// const { signin, signup} = require("../controllers/authController");
const User = require("../models/User");


// REGISTER
router.post("/", async (req, res)=>{
    const user = await new User({
        username: "James",
        email: "kingjamesegun@gmail.com",
        password: "segun#3654"
    });
    try{
        await user.save();
        res.send("Ok");
    }catch(err){
        console.log(err);
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();
// const { signin, signup} = require("../controllers/authController");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// SWAGGER CONFIGURATION
/**
 * @swagger
 * 
 * /api/auths/register:
 *  post:
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: username
 *            in: formData
 *            required: true
 *            type: string
 *          - name: email
 *            in: formData
 *            required: true
 *            type: string
 *          - name: password
 *            in: formData
 *            required: true
 *            type: string
 *      responses:
 *          200:
 *              description: Success
 * 
 */

// REGISTER
router.post("/register", async (req, res)=>{
    console.log(req.body.password)
    try{
        // generate password
        const hashedPassword = await bcrypt.hashSync(req.body.password, 10);

        // genertae new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        // saving to db
        const { username, email } = await newUser.save();
        res.status(200).json({
            message: "Your account has been created successfully",
            username,
            email
        });
    }catch(err){
        console.log(err);
    }
});

// LOGIN
router.post("/login", async (req,res)=>{
    try{
        // find user
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json("User not found");

        // compare password
        const validPassword= await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Password Incorrect")

        res.status(200).json(user);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
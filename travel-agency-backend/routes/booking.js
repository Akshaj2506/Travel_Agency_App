const express = require("express")
const { body, validationResult } = require("express-validator")
const router = express.Router()
const Booking = require("../models/Booking")

router.post("/book", [
   body("email", "Format of Email is incorrect").isEmail(),
   body("phone", "Length of phone number should be 10 characters").isLength({min: 10, max: 12})
],(req, res) => {

})
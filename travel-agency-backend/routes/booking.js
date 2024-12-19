const express = require("express")
const { body, validationResult } = require("express-validator")
const router = express.Router()
const Booking = require("../models/Booking")

router.post("/add", [
   body("email", "Format of Email is incorrect").isEmail(),
   body("phoneNumber", "Length of phone number should be 10 characters").isLength({ min: 10, max: 12 })
], async (req, res) => {
   try {
      const errors = validationResult(req);
      if (!(errors.isEmpty())) {
         res.status(400).json({ errors: errors.array() });
      } else {
         const newBooking = await Booking.create(req.body)
         // Respond with success
         res.status(200).json({
            message: "Booking added successfully!",
            package: newBooking,
         });
      }
   } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
   }
})

module.exports = router
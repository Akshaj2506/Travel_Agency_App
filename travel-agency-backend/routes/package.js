const express = require("express");
const { body, validationResult } = require("express-validator")
const router = express.Router()
const Package = require('../models/Package')

router.post('/add', [
   body('title', 'Title should be of Minimum 3 characters').isLength({ min: 3 }),
   body('description', "Description should not be less than 3 characters").isLength({ min: 3 }),
], async (req, res) => {
   try {
      const errors = validationResult(req);

      if (!(errors.isEmpty())) {
         res.status(400).json({ errors: errors.array() });
      } else {
         const {
            title,
            description,
            price,
            availableDate: {
               startDate,
               endDate
            },
            img
         } = req.body;

         const newPackage = await Package.create({
            title: title || null,
            description: description || null,
            price: price || null,
            availableDate: startDate || null,
            img: img || null
         })

         // Respond with success
         res.status(200).json({
            message: "Package added successfully!",
            package: newPackage,
         });
      }
   } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
   }
})
router.get("/fetchAll", async (req, res) => {
   try {
      const packages = await Package.find();
      res.json({ packages: packages })
   } catch (error) {
      console.error(error.message);
      res.status(500).json({ "error": "Internal Server Error" })
   }
})
router.put("/update/:id", async (req, res) => {
   try {
      const updatedPackage = await Package.findByIdAndUpdate(
         req.params.id,
         req.body,
         { new: true }
      );
      res.json(updatedPackage);
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
   }
})
router.delete("/delete/:id", async (req, res) => {
   try {
      const targetPackage = await Package.findById(req.params.id);
      if (!targetPackage)
         return res.status(404).json({
            error: "Record Not Found"
         });
      Package.findByIdAndDelete({ _id: req.params.id })
      .then(res.json({
         resp: "Note Deleted Successfully"
      }));
   } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
   }
})
module.exports = router
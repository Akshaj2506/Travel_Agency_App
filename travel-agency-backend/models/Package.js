const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
   title : {
      type: String,
      required: true
   },
   description : {
      type: String,
      required: true
   },
   price : {
      type: mongoose.Types.Decimal128,
      required: true
   },
   availableDate: {
      type: Date,
      required: true
   },
   img : {
      type: String,
      required: true
   }
})

const Package = mongoose.model('package', PackageSchema);

module.exports = Package
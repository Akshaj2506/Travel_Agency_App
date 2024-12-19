const mongoose = require("mongoose");
const {Schema} = mongoose;

const BookingSchema = new Schema({
   name : {
      type: String,
      required: true
   },
   selectedPackage : {
      type : Schema.ObjectId,
      ref: "package"
   },
   email : {
      type: String,
      required : true
   },
   phoneNumber : {
      type : Number,
      required : true
   },
   travellerQuantity : {
      type : Number,
      required : true
   },
   specialRequests : {
      type: String,
      required: false
   }
})

const Booking = mongoose.model('booking', BookingSchema)
module.exports = Booking
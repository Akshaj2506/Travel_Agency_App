const mongoose = require('mongoose')

const dbURI = "mongodb://localhost:27017/travel_agency"

const connectDB = () => {
   mongoose.connect(dbURI).then(console.log(`Connected to ${dbURI}`));
}

module.exports = connectDB
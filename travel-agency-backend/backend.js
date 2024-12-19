const connectDB = require("./db")
const express = require('express')
const cors = require('cors')
const app = express();
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const port = 5000;

dotenv.config();
connectDB();

app.use(cors({
   origin: 'http://localhost:5173',
   methods: ['GET', 'POST', 'PUT', "DELETE"],
   allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({
   extended:true
}))

app.use('/api/package', require('./routes/package'))
app.use('/api/booking', require('./routes/booking'))

app.get('/', (req, res) => {
   res.send("Travel Agency Backend: RUNNING")
})

app.listen(port, () => {
   console.log(`Backend running on http://localhost:${port}`);
})
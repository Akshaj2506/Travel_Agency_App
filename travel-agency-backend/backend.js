const connectDB = require("./db")
const express = require('express')
const cors = require('cors')
const app = express();
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const port = 5000
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
   extended: true
}))
app.use(bodyParser.json())

app.use('/api/package', './routes/package')
app.use('/api/booking', './routes/booking')

app.get('/', (req, res) => {
   res.send("Travel Agency Backend: RUNNING")
})

app.listen(port, () => {
   console.log(`Backend running on http://localhost:${port}`);
})
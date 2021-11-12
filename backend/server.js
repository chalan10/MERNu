const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")

const customer = require("./routes/api/customer.js")
const restaurant = require("./routes/api/restaurant.js")

const app = express()

app.use(cors())

// BodyParser Middleware
app.use(bodyParser.json())

// DB Config
const db = require("./config/config.js").MONGO_URI

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err))

// Passport Middleware
app.use(passport.initialize())

// Passport Config
require("./config/passport.js")

// Routes
app.use("/", require("./routes/index.js"))
app.use("/api/customer", require("./routes/api/customer.js"))
app.use("/api/restaurant", require("./routes/api/restaurant.js"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

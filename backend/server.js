const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const dotenv = require("dotenv")

dotenv.config()

const customer = require("./routes/api/customer.js")
const restaurant = require("./routes/api/restaurant.js")

const app = express()

app.use(cors())

// BodyParser Middleware
app.use(bodyParser.json())

// DB Config
const db = process.env.MONGO_URI

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err))

// Passport Config
require("./config/passport.js")(passport)

// Passport Middleware
app.use(passport.initialize())

// Routes
app.use("/", require("./routes/index.js"))
app.use("/api/customer", passport.authenticate("jwt", { session: false }), require("./routes/api/customer.js"))
app.use("/api/restaurant", passport.authenticate("jwt", { session: false }), require("./routes/api/restaurant.js"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

const express = require("express");
const router = express.Router();

// Login/Landing Page
// GET /
router.get("/", (req, res) => {
	console.log("GET Home");
	res.send("GET Home");
});

module.exports = router;

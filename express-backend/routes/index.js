const express = require("express");
const router = express.Router();

// Login/Landing Page
// GET /
router.get("/", (req, res) => {
});

router.post("/", (req, res) => {
	console.log("POST Home");
	res.send("POST Home");
});

// Dashboard
// GET /menu
router.get("/menu", (req, res) => {
	console.log("GET Menu");
	res.send("GET Menu");
});

module.exports = router;

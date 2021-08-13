const express = require("express");
const router = express.Router();

// Login/Landing Page
// GET /
router.get("/", (req, res) => {
	res.send("Home Page");
});

// Dashboard
// GET /dashboard
router.get("/dashboard", (req, res) => {
	res.send("Dashboard");
});

module.exports = router;

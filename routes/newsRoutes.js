const express = require("express");
const router = express.Router();
const sportsController = require("../controllers/sportsController");

router.get("/top-headlines", (req, res) => {
  console.log("Hit /top-headlines route");
  sportsController.getTopHeadlines(req, res);
});

router.get("/top-headlines/sources", (req, res) => {
  console.log("Hit /top-headlines/sources route");
  sportsController.getTopHeadlinesSources(req, res);
});

router.get("/search", (req, res) => {
  console.log("Hit /search route");
  sportsController.searchNews(req, res);
});

module.exports = router;

const express = require('express');
const router = express.Router();
const sportsController = require('../controllers/sportsController');

router.get('/news/top-headlines', sportsController.getTopHeadlines);
router.get('/news/search', sportsController.searchNews);

module.exports = router;
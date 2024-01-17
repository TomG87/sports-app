const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
  name: String,
  sport: String,
  team: String,
});

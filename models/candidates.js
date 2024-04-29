const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  party: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  votes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      votedAt: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  voterCount: {
    type: Number,
    default: 0,
  },
});

const candidate = mongoose.model("Candidate", candidateSchema);
module.exports = candidate;

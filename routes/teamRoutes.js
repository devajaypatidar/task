const express = require("express");
const {
  createTeam,
  addMember,
  assignTaskToTeam,
} = require("../controllers/teamController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Team routes
router.post("/", authMiddleware, createTeam);
router.post("/add-member", authMiddleware, addMember);
router.post("/assign-task", authMiddleware, assignTaskToTeam);

module.exports = router;

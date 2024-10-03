const express = require("express");
const {
  createTask,
  assignTask,
  updateTask,
  listTasks,
  addCollaborator,
} = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Task routes
router.post("/", authMiddleware, createTask);
router.post("/assign", authMiddleware, assignTask);
router.put("/:taskId", authMiddleware, updateTask);
router.get("/", authMiddleware, listTasks);
router.post("/collaborator", authMiddleware, addCollaborator);

module.exports = router;

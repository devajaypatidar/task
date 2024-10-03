const Task = require("../models/Task");
const TaskCollaborators = require("../models/TaskCollaborators");

exports.createTask = async (req, res) => {
  try {
    const { title, description, due_date, priority } = req.body;
    const task = await Task.create({
      title,
      description,
      due_date,
      priority,
      owner_id: req.user.id,
    });

    res.status(201).json({ success: true, task });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.assignTask = async (req, res) => {
  try {
    const { taskId, userId } = req.body;
    await TaskCollaborators.create({
      task_id: taskId,
      user_id: userId,
    });

    res
      .status(200)
      .json({ success: true, message: "Task assigned successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const updates = req.body;
    await Task.update(updates, { where: { id: taskId } });
    res
      .status(200)
      .json({ success: true, message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.listTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { owner_id: req.user.id } });
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.addCollaborator = async (req, res) => {
  try {
    const { taskId, userId } = req.body;
    await TaskCollaborators.create({
      task_id: taskId,
      user_id: userId,
    });

    res
      .status(200)
      .json({ success: true, message: "Collaborator added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

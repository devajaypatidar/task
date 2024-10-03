const Team = require("../models/Team");
const User = require("../models/User");
const Task = require("../models/Task");

exports.createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    const team = await Team.create({
      name,
      owner_id: req.user.id,
    });
    res.status(201).json({ success: true, team });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.addMember = async (req, res) => {
  try {
    const { teamId, userId } = req.body;
    const team = await Team.findByPk(teamId);

    if (!team) {
      return res
        .status(404)
        .json({ success: false, message: "Team not found" });
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    await team.addMember(user);
    res
      .status(200)
      .json({ success: true, message: "Member added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.assignTaskToTeam = async (req, res) => {
  try {
    const { teamId, taskId } = req.body;
    const team = await Team.findByPk(teamId);
    const task = await Task.findByPk(taskId);

    if (!team || !task) {
      return res
        .status(404)
        .json({ success: false, message: "Team or task not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Task assigned to team successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

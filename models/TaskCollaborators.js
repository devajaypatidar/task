const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const TaskCollaborators = sequelize.define(
  "TaskCollaborators",
  {
    task_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = TaskCollaborators;

const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const TeamMembers = sequelize.define(
  "TeamMembers",
  {
    team_id: {
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

module.exports = TeamMembers;

const User = require("./User");
const Task = require("./Task");
const Team = require("./Team");
const TeamMembers = require("./TeamMembers");
const TaskCollaborators = require("./TaskCollaborators");

// Team <--> User (Many-to-Many)
Team.belongsToMany(User, { through: TeamMembers });
User.belongsToMany(Team, { through: TeamMembers });

// Task <--> User (Many-to-Many for Collaborators)
Task.belongsToMany(User, { through: TaskCollaborators });
User.belongsToMany(Task, { through: TaskCollaborators });

// A task has one owner (User)
Task.belongsTo(User, { as: "owner", foreignKey: "owner_id" });
User.hasMany(Task, { as: "tasks", foreignKey: "owner_id" });

module.exports = { User, Task, Team, TeamMembers, TaskCollaborators };

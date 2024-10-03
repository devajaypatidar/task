require("dotenv").config();
module.exports = {
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
};

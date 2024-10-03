const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await User.findByPk(decoded.id);
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: "Authorization denied" });
    }
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Token is not valid" });
  }
};

module.exports = authMiddleware;

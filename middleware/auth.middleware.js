const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "bank", function (err, decoded) {
      req.body.accountId = decoded.data.accountId;
      next();
    });
  } else {
    res.send({ msg: "You are not authorized" });
  }
};

module.exports = { authenticate };
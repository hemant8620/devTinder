const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAuthorized = token === "xyjnz";
  if (!isAuthorized) {
    res.status(401).send("Unauthorized access");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};

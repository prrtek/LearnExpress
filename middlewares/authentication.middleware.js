const enableAuthentication = false; // Toggle this variable to enable or disable authentication

const authenticationMiddleware = (req, res, next) => {
  if (enableAuthentication) {
    next();
  } else {
    res.status(401).send("Authentication is required");
  }
};

export default authenticationMiddleware;

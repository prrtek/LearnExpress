const usermiddle = (req, res, next) => {
  if (req.body.name && req.body.email) {
    next();
  } else {
    res.status(400).send("Name and email are required");
  }
};

export default usermiddle;

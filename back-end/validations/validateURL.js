const validateURL = (req, res, next) => {
  const { url } = req.body;
  if (!url) {
    return res.status(422).json({ error: "You must specify a value for url" });
  }
  next();
};


module.exports = {
  validateURL,
};

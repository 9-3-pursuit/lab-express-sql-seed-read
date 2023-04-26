const validateURL = (req, res, next) => {
    // console.log(req.body.url.substring(0, 7))
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

module.exports = {
  validateURL,
};
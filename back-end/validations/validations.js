// checks if URL input is correct
const validateURL = (req, res, next) => {
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

// checls if favorite value is a boolean => true or false; is it a favorite or not?
checkFaveBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (
    is_favorite == "true" ||
    is_favorite == "false" ||
    is_favorite == true ||
    is_favorite == false ||
    is_favorite == undefined
  ) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be Boolean" });
  }
};

// checks to make sure name input is present
checkNameThere = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "name must ne present" });
  }
};

module.exports = {
  validateURL,
  checkFaveBoolean,
  checkNameThere,
};

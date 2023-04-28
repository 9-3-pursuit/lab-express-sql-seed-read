

const validateName = (req, res, next) => {
    const { name } = req.body;
    if (!name || name.trim() === "") {
      return res
        .status(400)
        .json({ error: "Song name is missing or it is an empty string" });
    }
    return next();
  };
  
  module.exports = validateName;
  
  
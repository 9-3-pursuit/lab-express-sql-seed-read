


const validateNAF = (req, res, next) => {
 
    if (req.body.name && req.body.artist && (req.body.is_favorite == true || req.body.is_favorite == false)) {

      return next();
    } else {
      res
        .status(400)
        .json({ error: "You forgot name, artist or is_favotite" });
    }
  };
  
  module.exports = {
    validateNAF,
  };
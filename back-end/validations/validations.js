// checls if favorite value is a boolean => true or false; is it a favorite or not?
checkFaveBoolean = (req, res, next) => {
  const { is_favorite } = req.body;
  if (is_favorite === true || 
    is_favorite === false || 
    is_favorite === undefined) {
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
};

// checks to make sure song name input is present
checkSongNameThere = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "song name must be present" });
  }
};

// checks to make sure artist name input is present
checkArtistNameThere = (req, res, next) => {
  if (req.body.artist) {
    next();
  } else {
    res.status(400).json({ error: "artist name must ne present" });
  }
};

module.exports = {
  checkArtistNameThere,
  checkFaveBoolean,
  checkSongNameThere,
};

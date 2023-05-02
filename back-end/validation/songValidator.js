const songValidator = (req, res, next) => {
  const song = req.body;
  if (
    song.is_favorite !== "true" &&
    song.is_favorite !== "false" &&
    !!song.is_favorite
  ) {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  }
  if (!song.name || !song.artist) {
    if (!song.name) {
      res.status(400).json({ error: "name is required" });
    }
    res.status(400).json({ error: "artist is required" });
  } else {
    next();
  }
};

module.exports = songValidator;

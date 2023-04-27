const Joi = require("joi");

const songSchema = Joi.object({
  name: Joi.string().required(),
  artist: Joi.string().required(),
  album: Joi.string(),
  time: Joi.string(),
  is_favorite: Joi.boolean(),
});

const songValidator = (req, res, next) => {
  const { error, value } = songSchema.validate(req.body);
  if(!error) {
    next();
  } else {
    res.status(400).json({ error: error.details[0].message});
  }
};

module.exports = songValidator;
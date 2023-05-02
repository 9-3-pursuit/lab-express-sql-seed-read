DROP DATABASE IF EXISTS tuners;
CREATE DATABASE tuner;

 \c tuner;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artiste TEXT NOT NULL,
  time TEXT,
  album TEXT,
  is_favorite BOOLEAN
);
-- artiste is a misspelling of artist, I altered the table 
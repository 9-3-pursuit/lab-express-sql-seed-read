

DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;

 \c tuner;

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  time TEXT,
  album TEXT,
  is_favorite BOOLEAN
);
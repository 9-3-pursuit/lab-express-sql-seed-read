DROP DATABASE IF EXISTS tuner;
 CREATE DATABASE tuner;

 \c tuner;

 CREATE TABLE albums (
  album_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  year INTEGER,
  genre TEXT,
  producer TEXT
 );

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  time TEXT,
  album TEXT,
  is_favorite BOOLEAN,
  album_id INTEGER NOT NULL REFERENCES albums (album_id) ON DELETE CASCADE


 );



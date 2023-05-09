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
  song_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  artist TEXT NOT NULL,
  time TEXT,
  album TEXT,
  is_favorite BOOLEAN,
  album_id INTEGER REFERENCES albums(album_id) ON DELETE CASCADE 
);



-- Cascade deletes from albums to songs.
-- This means that if we delete an album, all of its songs will be deleted as well.
-- This is a good idea because we don't want to have songs that don't belong to any album.
--referential integrity means that the data in the database is valid and consistent.
-- In other words, if we have a song that belongs to an album, we don't want to delete the album and leave the song in the database.
-- We want to delete the song as well.
-- This is what the ON DELETE CASCADE clause does.

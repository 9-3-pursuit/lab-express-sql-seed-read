DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c bookmarks_dev;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 is_favorite BOOLEAN
);

DROP DATABASE IF EXISTS songs_dev;

CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);

CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 reviewer TEXT NOT NULL,
 title TEXT NOT NULL,
 content TEXT NOT NULL,
 rating NUMERIC,
 CHECK (rating >= 0 AND rating <= 5),
 reviewer_id INTEGER NOT NULL REFERENCES songs (id)
 ON DELETE CASCADE
);
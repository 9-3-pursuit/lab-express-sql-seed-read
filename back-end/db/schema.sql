DROP DATABASE IF EXISTS songs_dev;

CREATE DATABASE songs_dev;

\ c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    playlist_id INTERGER REFERENCES playlist (id) ON DELETE CASACADE
);

CREATE TABLE playlist (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    is_favorite BOOLEAN
);
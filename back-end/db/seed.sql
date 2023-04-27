--id SERIAL PRIMARY KEY,
 --name TEXT NOT NULL,
 --artist TEXT NOT NULL,
 --album TEXT,
 --time TEXT,
 --is_favorite BOOLEAN

\c songs_dev

 INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
 ('99 Problems', 'Jay Z', 'The Black Album', '3:54', TRUE),
 ('I Will Always Love You', 'Whitney Houston', 'The Bodyguard: Original Soundtrack Album', '4:31', TRUE),
 ('Kiss', 'Prince', 'Parade', '3:46', FALSE),
 ('Rolling In The Deep', 'Adele', '21', '3:48', FALSE),
 ('Formation', 'Beyonce', 'Lemonade', '3:26', TRUE),
 ('Work It', 'Missy Elliot', 'Under Construction', '4:53', TRUE),
 ('Gasolina', 'Daddy Yankee', 'Barrio Fino', '3:15', FALSE),
 ('Doo Wop (That Thing)', 'Lauryn Hill', 'The Miseducation of Lauryn Hill', '5:20', TRUE),
 ('Paper Planes', 'M.I.A.', 'Kala', '3:24', FALSE),
 ('Billie Jean', 'Michael Jackson', 'Thriller', '4:54', True);
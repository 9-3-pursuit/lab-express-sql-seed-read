\c tuner;

INSERT INTO albums(name, artist, year, genre, producer) VALUES 
('Young Americans', 'David Bowie', 1975, 'Rock', 'Tony Visconti'),
    ('Remain in Light', 'Talking Heads', 1980, 'New Wave', 'Brian Eno'),
    ('New Day Rising', 'Hüsker Dü', 1985, 'Punk', 'Hüsker Dü'),
    ('Thin Mind', 'Wolf Parade', 2020, 'Indie Rock', 'John Goodmanson'),
    ('This is...', 'Icona Pop', 2013, 'Pop', 'Patrik Berger');


INSERT INTO songs (name, artist, time, is_favorite, album_id) VALUES 
('Fame', 'David Bowie', '4:12', true,1 ),
('Love', 'David Bowie', '4:30', false,1 ),
('always', 'David Bowie', '5:10', true,1 ),
    ('Once in a Lifetime', 'Talking Heads','4:19', true,2 ),
    ('live', 'Talking Heads','3:15', true,2 ),
    ('next', 'Talking Heads','4:25', true,2 ),
    ('The Great Curve', 'Talking Heads', '5:39', true,2 ),
    ('Books about UFOs', 'Hüsker Dü', '2:49', true,3 ),
    ('Mr. Startup', 'Wolf Parade', '3:31', true,4 ),
    ('We Got the World', 'Icona Pop', '3:17', false,5 );
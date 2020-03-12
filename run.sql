
-- CREATE TABLE categories
-- (
--     id SERIAL NOT NULL PRIMARY KEY,
--     title varchar(50)
-- );

-- INSERT INTO categories VALUES
-- (DEFAULT, 'Action & Adventure'),
-- (DEFAULT, 'Drama'),
-- (DEFAULT, 'Documentary'),
-- (DEFAULT, 'Horror'),
-- (DEFAULT, 'Comedy'),
-- (DEFAULT, 'Sci-Fi'),
-- (DEFAULT, 'War'),
-- (DEFAULT, 'Musical'),
-- (DEFAULT, 'Animated');


-- CREATE TABLE blogs
-- (
--     id SERIAL NOT NULL PRIMARY KEY,
--     title varchar(50),
--     author_id integer REFERENCES authors(id), 
--     category_id integer REFERENCES categories(id), 
--     body varchar(1000), 
--     release date, 
--     summary varchar(1000),
--     imageurl varchar(200)
-- );




-- CREATE TABLE authors
-- (
--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar(50),
--     bio varchar(1000),
--     imageurl varchar(200)
-- );


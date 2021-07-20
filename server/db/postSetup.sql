DROP TABLE IF EXISTS post;

-- CREATE TABLE post (
--     id serial PRIMARY KEY,
--     title varchar(255) NOT NULL,
--     user varchar(100),
--     body varchar(400) 
-- );

CREATE TABLE post(
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL,
    username varchar(100),
    body varchar(500)
);
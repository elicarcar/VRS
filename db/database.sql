CREATE DATABASE visitor_registration_system_01

CREATE TABLE users (
    id BIGSERIAL NOT NULL,
    token CHAR(32) NOT NULL UNIQUE,
    joined TIMESTAMP WITH TIME ZONE NOT NULL 
);

CREATE TABLE visitors (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    company_name VARCHAR(50) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE, 
    current_appointment JSON DEFAULT NULL,
    start_time TIMESTAMP WITHOUT TIME ZONE DEFAULT (now() at time zone 'utc'),
    end_time TIMESTAMP WITHOUT TIME ZONE DEFAULT NULL,
    is_logged Boolean default true);

CREATE TABLE visits (
id BIGSERIAL NOT NULL PRIMARY KEY UNIQUE,
v_id INT,
person JSON DEFAULT NULL,
start_time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
end_time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
FOREIGN KEY (v_id) REFERENCES visitors (id) );
CREATE DATABASE visitor_registration_system_01

CREATE TABLE visitors (
    id BIGSERIAL NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    company_name VARCHAR(50) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE, 
    current_appointment JSON DEFAULT NULL,
    is_logged Boolean default true);

CREATE TABLE visits (
id INT NOT NULL PRIMARY KEY,
v_id INT,
start_time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
end_time TIMESTAMP WITHOUT TIME ZONE NOT NULL,
FOREIGN KEY (v_id) REFERENCES visitors (id) );
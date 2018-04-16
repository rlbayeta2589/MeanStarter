CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
DROP DATABASE IF EXISTS DATABASE_NAME;
CREATE DATABASE DATABASE_NAME;
GRANT ALL PRIVILEGES ON DATABASE_NAME.* TO 'username'@'localhost' WITH GRANT OPTION;
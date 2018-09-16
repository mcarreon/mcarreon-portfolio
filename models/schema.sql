DROP DATABASE IF EXISTS portfolio_db;
CREATE DATABASE portfolio_db;

DROP DATABASE IF EXISTS test_portfolio_db;
CREATE DATABASE test_portfolio_db;

use portfolio_db;

SHOW TABLES;

#DROP TABLE projects;
#DROP TABLE messages;

SELECT * FROM messages;
SELECT * FROM projects;
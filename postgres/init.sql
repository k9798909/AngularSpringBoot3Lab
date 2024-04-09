CREATE SEQUENCE users_id_seq;

CREATE TABLE users (
   id TEXT PRIMARY KEY DEFAULT LPAD(nextval('users_id_seq')::TEXT, 11, '0'),
   username TEXT NOT NULL CHECK (username <> '') UNIQUE,
   password TEXT NOT NULL CHECK (password <> ''),
   name VARCHAR(255) NOT NULL CHECK (name <> ''),
   birthday DATE NOT NULL ,
   email VARCHAR(255) NOT NULL CHECK (email <> ''),
   address VARCHAR(255)  NOT NULL CHECK (address <> '')
);

CREATE INDEX username_index ON users (username);

INSERT INTO users (username, password, name, birthday, email, address)
VALUES ('test', '{bcrypt}$2a$10$QZmTXJBuZZ9G5X5zsNdlA.iiGCfIgB.ooEv7eYwWJBIi61vYFq05G', 'John Doe', '1990-01-15', 'john.doe@example.com', '123 Main St');












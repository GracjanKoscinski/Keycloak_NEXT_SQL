CREATE TABLE IF NOT EXISTS todo_app (
    ID SERIAL PRIMARY KEY,
    userID VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    addingDate DATE,
    achieved BOOLEAN DEFAULT FALSE
);

CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    task_name TEXT,
    status TEXT
);

INSERT INTO tasks (task_name, status)
VALUES ('Meeting', 'Pending');
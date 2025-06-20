CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  clock_in TIMESTAMP,
  clock_out TIMESTAMP
);

CREATE TABLE reports (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

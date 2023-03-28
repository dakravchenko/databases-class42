const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySql connected...');
});

db.query('CREATE DATABASE IF NOT EXISTS dbweek2');

db.query('USE dbweek2', err => {
  if (err) {
    throw err;
  }
});

db.query('DROP TABLE IF EXISTS authors');

db.query(
  'CREATE TABLE IF NOT EXISTS authors (author_id INT AUTO_INCREMENT PRIMARY KEY, author_name VARCHAR(255), university VARCHAR(200), date_of_birth DATE, h_index INT, gender VARCHAR(20))',
  err => {
    if (err) {
      throw err;
    }
  }
);

db.query('ALTER TABLE authors ADD mentor_id INT', err => {
  if (err) {
    throw err;
  }
});

db.query(
  'ALTER TABLE authors ADD CONSTRAINT fk_mentor FOREIGN KEY (mentor_id) REFERENCES authors(author_id)',
  err => {
    if (err) {
      throw err;
    }
  }
);

db.query(
  `INSERT INTO authors (author_name, university, date_of_birth, h_index, gender, mentor_id)
VALUES
  ('Jane Smith', 'University of California, Los Angeles', '1990-01-15', 10, 'female', NULL),
  ('John Doe', 'University of Oxford', '1985-03-02', 12, 'male', NULL),
  ('Mary Johnson', 'Harvard University', '1987-11-21', 9, 'female', 1),
  ('James Brown', 'Massachusetts Institute of Technology', '1992-07-12', 8, 'male', 2),
  ('Karen Lee', 'Stanford University', '1991-06-28', 11, 'female', 2),
  ('Michael Chen', 'California Institute of Technology', '1993-12-05', 7, 'male', 3),
  ('Samantha Kim', 'Princeton University', '1994-09-17', 6, 'female', NULL),
  ('David Lee', 'Yale University', '1989-04-20', 13, 'male', 3),
  ('Emily Wang', 'University of Cambridge', '1995-02-07', 5, 'female', 4),
  ('Ryan Davis', 'Columbia University', '1990-08-30', 9, 'male', 4),
  ('Rachel Chen', 'University of Pennsylvania', '1996-01-19', 4, 'female', 5),
  ('Matthew Wong', 'Cornell University', '1993-06-04', 8, 'male', 6),
  ('Olivia Chang', 'Duke University', '1991-12-10', 10, 'female', NULL),
  ('Daniel Park', 'University of Chicago', '1988-05-23', 11, 'male', 6),
  ('Avery Kim', 'University of Michigan', '1992-03-14', 7, 'female', NULL);`,
  err => {
    if (err) {
      throw err;
    }
  }
);

db.query('SELECT * FROM authors', (err, result) => {
  if (err) {
    throw err;
  }
  console.log(result);
});
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

db.query('CREATE DATABASE IF NOT EXISTS week2db');

db.query('USE week2db', err => {
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
    `INSERT INTO authors (author_name, university, h_index, mentor_id)
     VALUES 
      ('Alice Smith', 'University of ABC', 4, NULL),
      ('Bob Johnson', 'University of XYZ', 2, 2),
      ('Charlie Brown', 'University of DEF', 6, 1),
      ('David Lee', 'University of LMN', 1, NULL),
      ('Emily Kim', 'University of GHI', 5, 2),
      ('Frank Liu', 'University of PQR', 3, 8),
      ('Grace Chen', 'University of JKL', 7, NULL),
      ('Henry Wong', 'University of UVW', 2, 3),
      ('Ivy Zhang', 'University of MNO', 4, NULL),
      ('Jack Lee', 'University of STU', 6, NULL),
      ('Katie Davis', 'University of RST', 3, 2),
      ('Larry Chen', 'University of GHI', 1, 1),
      ('Mary Brown', 'University of DEF', 5, 3),
      ('Nancy Kim', 'University of JKL', 2, 5),
      ('Oliver Wu', 'University of ABC', 4, 7);`,
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
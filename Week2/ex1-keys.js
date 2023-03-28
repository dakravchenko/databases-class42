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
    'CREATE TABLE IF NOT EXISTS authors (author_id INT AUTO_INCREMENT PRIMARY KEY, author_name VARCHAR(255), university VARCHAR(255), date_of_birth DATE, h_index INT, gender VARCHAR(20))',
    err => {
      if (err) {
        throw err;
      }
      console.log('Table Authors Created');
    }
  );

db.query('ALTER TABLE authors ADD mentor_id INT', err => {
    if (err) {
      throw err;
    }
  });


db.query(
    'ALTER TABLE authors ADD CONSTRAINT mentor_id FOREIGN KEY (mentor_id) REFERENCES authors(author_id)',
    err => {
      if (err) {
        throw err;
      }
    }
  );

db.query(
    "INSERT INTO authors (author_name, university, date_of_birth, h_index, gender,mentor_id) VALUES ('William Tennesy', 'MIT', '1982-06-14', 10, 'Male', null),('Anna Swiatek', 'MSU', '1988-11-03', 15, 'Female', 1), ('Daniil Medvedev', 'HSE', '1990-02-01', 8, 'Male', 2), ('Claudia Femme', 'SIV', '1987-12-07', 12, 'Female', 1), ('Andrew Kim', 'SU', '1982-06-12', 9, 'Male', 4), ('Emily Wong', 'BU', '1984-08-18', 14, 'Female', 5), ('Chris Lee', 'UC', '1975-03-25', 11, 'Male', 3), ('Karen Davis', 'Yale University', '1993-01-09', 7, 'Female', 7), ('Michael Chen', 'University of Oxford', '1989-11-02', 10, 'Male', 3), ('Rachel Kim', 'University of Oxford', '1981-09-29', 16, 'Female', 2)",
    err => {
      if (err) {
        throw err;
      }
      console.log('Author data inserted');
    }
 );

db.query('SELECT * FROM authors', (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
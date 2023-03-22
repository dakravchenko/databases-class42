const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySql connected...');
});

connection.query(
  'SELECT name FROM country WHERE population > 8000000',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name FROM country WHERE name LIKE "%land%"',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name FROM city WHERE population BETWEEN 500000 AND 1000000',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name FROM country WHERE continent = "Europe"',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT * FROM country ORDER BY SurfaceArea DESC',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name FROM city WHERE CountryCode = "NLD"',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name, population FROM city WHERE name = "Rotterdam"',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name, SurfaceArea FROM country ORDER BY SurfaceArea DESC LIMIT 10',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT name, population FROM city ORDER BY population DESC LIMIT 10',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);

connection.query(
  'SELECT SUM(population) AS "World Population" FROM country',
  (err, result) => {
    if (err) throw err;
    console.log(result);
  }
);
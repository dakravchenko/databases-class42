const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server!');
});

//Create a database called meetup
connection.query('CREATE DATABASE IF NOT EXISTS meetup', (err, result) => {
    if (err) throw err;
    console.log(result);
  });

//Make a connection to your database, using your MySQL hyfuser login credentials
connection.query('USE meetup', err => {
    if (err) throw err;
  });

//Create 3 tables

connection.query(
    'CREATE TABLE IF NOT EXISTS invitee (invitee_no INT NOT NULL AUTO_INCREMENT, invitee_name VARCHAR(255), invited_by VARCHAR(255), PRIMARY KEY(invitee_no))',
    err => {
      if (err) throw err;
      console.log('Database Invitee has been created');
    }
  );

connection.query(
    'CREATE TABLE IF NOT EXISTS room(room_no INT NOT NULL AUTO_INCREMENT, room_name VARCHAR(255), floor_number INT, PRIMARY KEY(room_no))',
    err => {
        if (err) throw err;
        console.log('Database Room has been created');
      }
    )

connection.query(
    'CREATE TABLE IF NOT EXISTS meeting (meeting_no INT NOT NULL AUTO_INCREMENT, meeting_title VARCHAR(255), starting_time DATETIME, ending_time DATETIME, room_no INT, PRIMARY KEY(meeting_no), FOREIGN KEY(room_no) REFERENCES room(room_no))',
    err => {
        if (err) throw err;
        console.log('Database Meeting has been created');
      }
    );

//Insert 5 rows into each table with relevant fields. Find a way to create the data for those fields
connection.query(
    "INSERT INTO invitee (invitee_name, invited_by) VALUES ('Nicky', 'Wessel'), ('Jiordani', 'Oleg'), ('Philipp', 'Katarina'), ('Dmitrii', 'Natalia'), ('Marina', 'Robert')", (err, result) => {
  if (err) throw err;
  console.log("Records inserted in invitee table", result);
});


connection.query(
    "INSERT INTO room (room_name, floor_number) VALUES ('A', 1), ('B', 1), ('C', 2), ('D', 2), ('E', 2)", (err, result) => {
  if (err) throw err;
  console.log("Records inserted in invitee table", result);
});

connection.query(
    "INSERT INTO meeting (meeting_title, starting_time, ending_time, room_no) VALUES ('Stand up meeting', '2022-02-03 10:22:15', '2022-02-03 12:25:30', 1), ('App demo', '2022-03-03 18:13:15', '2022-03-03 20:25:30', 2), ('Meeting with stakeholder', '2022-04-04 10:22:15', '2022-04-04 12:25:30', 3), ('Sprint Planning', '2022-06-12 13:13:13', '2022-06-12 13:13:13', 4), ('Retro', '2022-07-07 07:07:07', '2022-07-07 08:08:08', 5)", (err, result) => {
  if (err) throw err;
  console.log("Records inserted in invitee table", result);
});

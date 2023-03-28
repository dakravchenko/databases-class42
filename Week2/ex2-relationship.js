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

db.query('DROP TABLE IF EXISTS research_Papers');

db.query(
  'CREATE TABLE IF NOT EXISTS research_Papers (paper_id INT AUTO_INCREMENT PRIMARY KEY, paper_title VARCHAR(255), conference VARCHAR(200), publish_date DATE)',
  err => {
    if (err) {
      throw err;
    }
  }
);

db.query('DROP TABLE IF EXISTS author_research_Paper');

db.query(
  'CREATE TABLE IF NOT EXISTS author_research_Paper (id INT AUTO_INCREMENT PRIMARY KEY, author_id INT, research_Paper_id INT, FOREIGN KEY (author_id) REFERENCES authors (author_id), FOREIGN KEY (research_Paper_id) REFERENCES research_Papers (paper_id))',
  err => {
    if (err) {
      throw err;
    }
  }
);

db.query(
  `INSERT INTO research_Papers (paper_title, conference, publish_date)
  VALUES
    ('Machine Learning', 'IEEE', '2022-02-01'),
    ('Artificial Intell', 'ACM', '2022-03-15'),
    ('Neural Networks', 'ICML', '2021-12-10'),
    ('Data Mining', 'KDD', '2022-06-25'),
    ('Robotics', 'IROS', '2021-11-12'),
    ('Computer Vision', 'CVPR', '2022-06-19'),
    ('Natural Language', 'ACL', '2022-08-05'),
    ('Deep Learning', 'NIPS', '2021-12-05'),
    ('Reinforcement Learn', 'ICLR', '2022-04-21'),
    ('Big Data', 'SIGMOD', '2022-05-29'),
    ('IoT', 'PerCom', '2022-03-28'),
    ('Blockchain', 'CCS', '2022-11-02'),
    ('Quantum Computing', 'QIP', '2022-01-17'),
    ('Cybersecurity', 'RSA', '2022-05-08'),
    ('Cloud Computing', 'CCGRID', '2022-07-11'),
    ('Edge Computing', 'INFOCOM', '2022-04-05'),
    ('Augmented Reality', 'ISMAR', '2022-10-16'),
    ('Virtual Reality', 'VRST', '2022-11-29'),
    ('Distributed Systems', 'Middleware', '2022-12-04'),
    ('Human-Computer Int', 'CHI', '2022-05-22'),
    ('Computational Bio', 'RECOMB', '2022-04-12'),
    ('Medical Imaging', 'MICCAI', '2022-09-14'),
    ('Biometrics', 'BTAS', '2022-10-28'),
    ('Internet of Things', 'IoTDI', '2022-02-11'),
    ('Machine Translation', 'EMNLP', '2022-11-09'),
    ('Social Network', 'ASONAM', '2022-08-20'),
    ('Virtual Assistant', 'ICASSP', '2022-03-03'),
    ('Security and Privacy', 'ACNS', '2022-06-09'),
    ('Spatial Computing', 'ISMAR', '2022-10-16'),
    ('Semantic Web', 'ESWC', '2022-05-28');`
);

db.query(
  'INSERT INTO author_research_Paper (author_id, research_Paper_id) VALUES (1,4),(1,9),(1,12),(2,1),(2,5),(2,15),(3,2),(3,19),(3,29),(4,8),(4,18),(4,16),(5,26),(5,28),(5,21),(6,7),(6,13),(6,23),(7,3),(7,10),(7,11),(8,17),(8,22),(8,24),(9,9),(9,6),(9,14),(10,15),(10,20),(10,21),(11,23),(11,25),(11,27),(12,30),(12,1),(12,2),(13,6),(13,8),(13,13),(13,30),(14,10),(14,5),(14,19),(14,22),(15,6),(15,24),(15,26),(15,17)'
);

db.query('SELECT * FROM research_Papers', (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });

db.query('SELECT * FROM author_research_Paper', (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
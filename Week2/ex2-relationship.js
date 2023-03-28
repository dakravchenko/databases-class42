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
    ('A Study of Machine Learning Algorithms', 'International Conference on Machine Learning', '2022-06-15'),
    ('The Impact of Social Media on Society', 'Annual Conference on Social Media and Society', '2021-09-30'),
    ('An Analysis of Cryptocurrency Markets', 'IEEE International Conference on Blockchain and Cryptocurrency', '2023-03-01'),
    ('The Future of Quantum Computing', 'International Conference on Quantum Computing and Information', '2022-11-12'),
    ('Natural Language Processing Techniques for Sentiment Analysis', 'Conference on Empirical Methods in Natural Language Processing', '2022-08-23'),
    ('A Comparative Study of Deep Learning Architectures', 'Neural Information Processing Systems Conference', '2021-12-06'),
    ('Blockchain-based Solutions for Supply Chain Management', 'International Conference on Information Systems', '2023-01-10'),
    ('The Ethics of Artificial Intelligence', 'AAAI/ACM Conference on AI, Ethics, and Society', '2022-04-18'),
    ('A Survey of Recommender Systems', 'ACM Conference on Recommender Systems', '2021-08-09'),
    ('The Role of Big Data in Healthcare', 'IEEE International Conference on Big Data', '2023-10-16'),
    ('Privacy-Preserving Machine Learning Techniques', 'International Conference on Privacy, Security and Trust', '2022-07-27'),
    ('An Analysis of Cybersecurity Threats and Countermeasures', 'International Conference on Cybersecurity', '2022-09-05'),
    ('The Impact of Autonomous Vehicles on Society', 'IEEE Intelligent Transportation Systems Conference', '2023-06-28'),
    ('Natural Language Processing for Conversational Agents', 'Association for Computational Linguistics Conference', '2021-11-01'),
    ('The Future of Cloud Computing', 'International Conference on Cloud Computing', '2022-05-02'),
    ('Deep Reinforcement Learning for Game AI', 'IEEE Conference on Games', '2023-08-09'),
    ('Exploring the Limits of Neural Networks', 'Conference on Learning Theory', '2022-06-20'),
    ('Quantum Cryptography for Secure Communications', 'IEEE Global Communications Conference', '2022-12-05'),
    ('The Rise of Social Robots', 'International Conference on Social Robotics', '2023-11-21'),
    ('Big Data Analytics for Business Intelligence', 'ACM SIGKDD Conference on Knowledge Discovery and Data Mining', '2022-08-08'),
    ('The Intersection of Art and Technology', 'International Symposium on Electronic Art', '2023-07-17'),
    ('Exploring the Potential of Edge Computing', 'IEEE International Conference on Edge Computing', '2022-09-12'),
    ('Natural Language Generation for Data Visualization', 'IEEE Conference on Visualization', '2021-10-25'),
    ('Challenges and Opportunities in Autonomous Systems', 'International Conference on Robotics and Automation', '2022-05-09'),
    ('Privacy-Preserving Techniques for Data Sharing', 'International Conference on Data Engineering', '2023-04-03'),
    ('The Evolution of Computer Graphics', 'ACM SIGGRAPH Conference on Computer Graphics and Interactive Techniques', '2022-08-01'),
    ('Advances in Machine Learning for Healthcare', 'International Conference on Machine Learning and Healthcare', '2023-02-13'),
    ('The Impact of Artificial Intelligence on the Job Market', 'International Conference on Artificial Intelligence and Employment', '2022-10-18'),
    ('Emerging Trends in Natural Language Processing', 'Annual Meeting of the Association for Computational Linguistics', '2023-06-05'),
  `
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
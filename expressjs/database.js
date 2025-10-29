const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const connection = mysql.createConnection({
      host: 'localhost', 
      user: 'root',      
      password: '',
      database:'mydb' 
      
});

    connection.connect(err => {
    if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});
   
connection.connect(( ) => {
    let sql = "CREATE TABLE user ( id INT PRIMARY KEY AUTO_INCREMENT , name VARCHAR(255), email VARCHAR(255))";
    connection.query(sql, function(err , result){
    console.log("Table created");
    });
});



app.get('/insert', (req, res) => {
  const sql = 'INSERT INTO user (name, email) VALUES ("Steve", "job@gmail.com")'; 
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to insert item.' });
    }
    res.status(201).json({ message: 'Item added successfully', id: result.insertId });
  });
});

app.get('/select' ,(req,res) => {
    const sql = 'select * from user';
    connection.query(sql , (err ,result) => {
        if(err){
            console.error('Error selecting data:' ,err);
            return res.status(500).json({error:'failed select item '});
        }
        res.status(200).json({result})
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
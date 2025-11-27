const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000

const  connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '',
  database:'mydb' 
  
});

connection.connect(err => {
   if (err) {
     console.error('Error connecting to the database:', err);       
    }
      console.log('Connected to the database.');
});

const tableName = 'user';
const databaseName = 'mydb'; 


  connection.query(  `SHOW TABLES LIKE ?`, [tableName],(error, results, fields) => {
            if (error) {
                console.error('Error checking table existence:', error);
            }

            const tableExists = results.length;
            if (tableExists) {
                console.log(`Table '${tableName}' exists in database.`);   
            }
            else 
              {     
                
                  connection.connect(( ) => {
                      let sql = `CREATE TABLE if not exists ${tableName} ( id INT(10) PRIMARY KEY AUTO_INCREMENT , email VARCHAR(255), firstname VARCHAR(255),lastname VARCHAR(255),age INT(10) ,gender VARCHAR(10),password VARCHAR(50), status INT(10))`;
                      connection.query(sql, function(error , result){
                            if(error)  {
                              throw error;
                            }
                        console.log(`Table ${tableName} created`);
                      });
                  });
            }
          });

        //     app.get('/users', (req, res) => {
        //     const gender = req.query.gender; 
        //     const age = req.query.age; 
        //     let sqlQuery =`SELECT * FROM user`;

        //     const queryParams = [];
        
        //     if(gender&&age)
        //     {
        //         sqlQuery += ` WHERE gender = ? AND age ${age}`;
        //         queryParams.push(gender,age);
        //     }

        //     if (gender && !age) {
                              
        //         sqlQuery += ' WHERE gender = ?';
        //         queryParams.push(gender);
        //     }

        //     if(age && !gender)
        //     {
        //         sqlQuery += ` WHERE age ${age}`;
        //         console.log("🚀 sqlQu̥ery:", sqlQuery)
        //         queryParams.push(age);
        //     }

        
        //     connection.query(sqlQuery, (err, results) => {
        //         if (err) {                    
        //             console.log(sqlQuery);
                    
        //             console.error('Error executing query:', err);
        //             res.status(500).send('Error retrieving users.');
        //             return;
        //         }
        //         res.json(results);
        //     });
        // });


        app.get('/users', (req, res) => {
  const gender = req.query.gender; 
  const age = req.query.age; 
  let sqlQuery = `SELECT * FROM user`;
  const queryParams = [];
  const conditions = [];

  // Gender filter
  if (gender) {
    conditions.push('gender = ?');
    queryParams.push(gender);
  }

  // Age filter using short keywords
  if (age) {
    if (age.endsWith('p')) {
      const value = parseInt(age);
      conditions.push('age > ?');
      queryParams.push(value);
    } 
    else if (age.endsWith('pe')) {
      const value = parseInt(age);
      conditions.push('age >= ?');
      queryParams.push(value);
    } 
    else if (age.endsWith('m')) {
      const value = parseInt(age);
      conditions.push('age < ?');
      queryParams.push(value);
    } 
    else if (age.endsWith('me')) {
      const value = parseInt(age);
      conditions.push('age <= ?');
      queryParams.push(value);
    } 
    else if (!isNaN(age)) {
      conditions.push('age = ?');
      queryParams.push(parseInt(age));
    } 
    else {
      return res.status(400).send('Invalid age format. Use 18, 18p, 18pe, 18m, or 18me.');
    }
  }

  // Combine conditions
  if (conditions.length > 0) {
    sqlQuery += ' WHERE ' + conditions.join(' AND ');
  }

  // Execute query
  connection.query(sqlQuery, queryParams, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Database error.');
    }

    if (results.length === 0) {
      return res.status(404).send('No users found.');
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
           
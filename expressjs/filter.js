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

            app.get('/users', (req, res) => {
            const gender = req.query.gender; 
            const age = req.query.age; 
            let sqlQuery =`SELECT * FROM user`;

            const queryParams = [];
        
            if(gender&&age)
            {
                sqlQuery += ` WHERE gender = ? AND age ${age}`;
                queryParams.push(gender,age);
            }

            if (gender && !age) {
                              
                sqlQuery += ' WHERE gender = ?';
                queryParams.push(gender);
            }

            if(age && !gender)
            {
                sqlQuery += ` WHERE age ${age}`;
                console.log("🚀 sqlQu̥ery:", sqlQuery)
                queryParams.push(age);
            }

        
            connection.query(sqlQuery, (err, results) => {
                if (err) {                    
                    console.log(sqlQuery);
                    
                    console.error('Error executing query:', err);
                    res.status(500).send('Error retrieving users.');
                    return;
                }
                res.json(results);
            });
        });
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
           
const express = require('express')
const mysql = require('mysql')
const path = require('path')
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
      
const tableName = 'master';
const databaseName = 'mydb'; 
const sql = 'select id,username,firstname,lastname,gender from master ';

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
                      let sql = `CREATE TABLE if not exists ${tableName} ( id INT(10) PRIMARY KEY AUTO_INCREMENT , username VARCHAR(255), firstname VARCHAR(255),lastname VARCHAR(255) ,gender VARCHAR(10),password VARCHAR(50), status INT(10))`;
                      connection.query(sql, function(error , result){
                            if(error)  {
                              throw error;
                            }
                        console.log(`Table ${tableName} created`);
                      });
                  });
            
            }
        });



app.get('/insert', (req, res) => {
  const sql = 'INSERT INTO master (username,firstname,lastname,gender,password,status) VALUES ("cooper77", "michael", "maria", "Male", "101faf06bcf8140ead914fbe116c941a", 0)';
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to insert item.' });
    }
    res.status(201).json({ message: 'Item added successfully', id:insertId });
  });
});


app.get('/select' ,(req,res) => {
    connection.query(sql , (err ,result) => {
        if(err){
            console.error('Error selecting data:' ,err);

            return res.status(500).json({error:'failed select the item '});
        }
          res.send(result)
     
        });
});

app.get('/status/0' ,(req,res) => {
const sql = 'select id,username,firstname,lastname,gender,status from master where status = 0 ';
    connection.query(sql , (err ,result) => {
        if(err){
            console.error('Error selecting data:' ,err);

            return res.status(500).json({error:'failed select the item '});
        }
          res.send(result)
        });
});

app.get('/status/1' ,(req,res) => {
const sql = 'select id,username,firstname,lastname,gender,status from master where status = 1';
    connection.query(sql , (err ,result) => {
        if(err){
            console.error('Error selecting data:' ,err);

            return res.status(500).json({error:'failed select the item '});
        }
          res.send(result)
        });
});

app.get('/select/gender/male' ,(req,res) => {
    connection.query(sql , (err ,result) => {
         const males = result.filter(person => person.gender === 'Male');
          res.send(males)
     
        });
});

app.get('/select/gender/female' ,(req,res) => {
    connection.query(sql , (err ,result) => {
         const female = result.filter(person => person.gender === 'Female');
          res.send(female)
     
        });
});

app.get('/select/:id',(req,res) => {
  const itemid = req.params.id;
  const sql = 'select id,username,firstname,lastname,gender,password,status from master where id = ?';
  connection.query(sql,itemid, (err ,result) => {
        if(err){
            console.error('Error selecting data:' ,err);
            return res.status(500).json({error:'failed to select the item '});
        }
        res.status(200).json({ message: 'Item select successfully',result});
       
    });
})

app.get('/delete/:id',(req,res) => {
  const itemid = req.params.id;
  const sql = 'delete from master where id = ?';
  connection.query(sql,itemid, (err ,result) => {
        if(err){
            console.error('Error deleting data:' ,err);
            return res.status(500).json({error:'failed to delete the item '});
        }
        res.status(200).json({ message: 'Item delete successfully', id: itemid });
       
    });
})


//fetch form data
app.use(express.urlencoded({extended:true}))

app.post('/submit',(req,res)=> {
  const inputtext = req.body.input;
  const sql = 'select id,username,firstname,lastname,gender,password,status from master where id = ?';
  connection.query(sql,inputtext,(err,result) => {
    if(err){
            console.error('Error selecting data:' ,err);
            return res.status(500).json({error:'failed to delete the item '});
        }
        res.status(200).send({result});
       
      
  })
})



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
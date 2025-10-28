 //const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Hello World!');
//     res.end();
// });

// server.listen(3000, () => {
//     console.log('Server running on port 3000');
// });


// const http = require('http');
// const fs = require('fs');
// const PORT = 3000;

// const s = http.createServer((req, res) => {  
    
//     fs.readFile('myfile.txt', 'utf8', (err,data) => {
//         if(err) throw err;
//         res.end(data);
//     });   
    
// });
// s.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
   


const mysql = require('mysql');        
        
        let con = mysql.createConnection({
            host : "localhost",
            user : "root" ,
            password : "" ,
            database : "mydb"
        });
        
        con.connect(function(err){
            console.log("connected")
            let sql = "CREATE TABLE user (name VARCHAR(255), email VARCHAR(255))";
            con.query(sql, function(err , result){
                console.log("table created");
            });
        });




//import another file
// const myFunctions = require('./array');
// console.log(myFunctions); 



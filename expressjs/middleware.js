const express = require('express');
const app = express()
const port = 3030

//application middleware
app.use(function(req,res,next){
    console.log("request recevied:",req.url)
    next();
});

app.get('/',(req,res) => {
    res.send("hello world");
});

app.listen(port , () =>{
      console.log(`http://localhost:${port}`)
})
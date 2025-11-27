const express = require('express')
const app = express()
const cookieparser = require('cookie-parser');
const port = 3000

app.use(cookieparser());

app.get('/', (req,res) =>{
    const userData = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
  };
    const name= "hello"
    res.cookie("mycookie",userData,{expires :29-10-2025630 , maxAge: 36000 ,httpOnly:true ,secure:true,sameSite:'lax', priority:"high"})
    res.end("cookie inserted..")
});

app.get('/delete', (req,res) => {
    res.clearCookie("mycookie")
    res.send("cookie delete..")
})


app.listen(port,() => {
    console.log(`http://localhost:${port}`);
} )

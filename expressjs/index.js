const express = require('express')
const app = express()
const  data = require('./data.json')
const port = 3000



app.get('/findall', (req, res) => {
  const userall = data;
  res.json(userall);
});

app.get('/:id',(req,res) => {
    const userId = parseInt(req.params.id);
    const user = data.find(u =>userId === userId);
    if(user)
    {
        res.json(user)
    }
    else
    {
        console.log("user not found");
    }
})


app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})



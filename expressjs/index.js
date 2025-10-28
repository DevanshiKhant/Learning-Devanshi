const express = require('express')
const app = express()
const  data = require('./data.json')
const port = 3000



app.get('/findall', (req, res) => {
  const userall = data;
  res.json(userall);
});

app.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const user = data.find(u =>u.id === id);
    if(user)
    {
        res.json(user)
    }
    else
    {
      res.status(404).send('User not found');
    }


})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})



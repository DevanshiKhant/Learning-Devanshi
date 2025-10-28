const express = require('express')
const app = express()
const  data = require('./data.json')
const port = 3000



app.get('/findall', (req, res) => {
  const userall = data;
  res.json({meassage : "all user are found" , user : userall});
});

app.get('/:id',(req,res) => { 
  try
  {
    const id = parseInt(req.params.id);
    const user = data.find(u =>u.id === id);
    if(user)
    {
        res.json(user);
    }
    else
    {

      res.status(404).json({
        sucess:false,
        statuscode:404,
        meassage:'user not found',
        error:{
          details : `the requested id ${id} could not be found.`
        }
      });
    }
  }catch(error)
  {
    console.log("error found", error);
    res.status(500).send("internal server error");
  }

})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})



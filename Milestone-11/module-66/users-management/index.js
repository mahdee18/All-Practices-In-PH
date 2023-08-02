const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

const users =[
    {id:1,name:"Sabana",email:'sabana@gmail.com'},
    {id:1,name:"Sabnom",email:'sabnam@gmail.com'},
    {id:1,name:"Lubna",email:'lubna@gmail.com'},
]
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Users Management!!')
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/users', (req, res) => {
  console.log(req.body)
  const newUser = req.body;
  newUser.id = users.length+1;
  users.push(newUser)
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
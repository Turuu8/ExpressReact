const express = require("express")
const cors = require("cors");
const bp = require('body-parser')
const { application } = require("express");
const corsOptions = {
    origin: '',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
const app = express()
app.use(cors(corsOptions))
app.use(bp.json())
const port = 8000

const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Josh', lastName: 'Don' },
    { id: 3, firstName: 'Jonny', lastName: 'Doe4' },
    { id: 4, firstName: 'John2', lastName: 'Do5' },
    { id: 5, firstName: 'John3', lastName: 'Do6' },
    { id: 6, firstName: 'John4', lastName: 'Doe7' },
    { id: 7, firstName: 'John5', lastName: 'Doe8' },
    { id: 8, firstName: 'John6', lastName: 'Doe9' },
    { id: 9, firstName: 'John7', lastName: 'Doe10' },
]

app.get('/', (req, res) => {
    res.send("ACTION");
})
app.get('/users', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(users)
})
app.get('/users/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(users.filter(user => user.id == req.params.id));
})
app.delete('/users/:id/d', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { id } = req.params
    console.log(id, "aaaaa")
    if (id > users.length) {
        res.status(400).json({ message: `${req.params.id} id is not exist` })
    } else {
        let deleteusers = users.filter(user => user.id == req.params.id);
        let changeData = users.splice(deleteusers, 1)
        res.status(200).json({ message: `User with ${req.params.id} id is deleted ` })
    }
})
app.put('/users/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = req.params.id;
    let body = req.body;
    let index = users.filter(user => user.id == req.params.id);
    console.log(index)
    let updateUser = { id: id, ...body };
    users[index] = updateUser
    res.send(updateUser);
    res.status(400).send('404 not found')
})
app.listen(port, () => {
    console.log(`Listening on port a ${port}`)
})
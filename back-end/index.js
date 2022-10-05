const express = require("express")
const cors = require("cors");
const { application } = require("express");
const corsOptions = {
    origin: '',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
const app = express()
app.use(cors(corsOptions))
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
    let deleteusers = users.filter(user => user.id == req.params.id);
    let changeData = users.splice(deleteusers, 1)
    res.send(changeData)
})
app.put('/users/p/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let id = req.params.id;
    let body = req.body;
    let index = users.filter(user => user.id == req.params.id);
    let updateUser = { id: id, ...body };
    users[index] = updateUser
    res.send(updateUser);
})
app.listen(port, () => {
    console.log(`Listening on port a ${port}`)
})
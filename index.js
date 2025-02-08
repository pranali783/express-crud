//import express module
const express = require('express');
const app = express();

app.use(express.json()); //middleware to parse json date

//sample user data
let users = [
    {id: 1, name: "alice",email: "abc@gmail.com"},
    {id: 2, name: "rose", email: "abcd@gmail.com"},
    {id: 3, name: "alina", email: "abcf@gmail.com"}
];

//get all users
app.get('/users', (req,res)=>{
    res.json(users); //fixed from res.json(users)to res.json(users)
});

//post - add anew user
app.post('/users',(req,res)=>{
    const newUser = { id: users.lenght + 1, ...req.body  };
    users.push(newUser);
    res.status(201).json(newUser); //added response after adding a
});

//put - update a user
app.put('/users/:id', (req, res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found"});

    user.name = req.body.name || user.name; //fixed incorrect property refere
    user.email = req.body.email || user.email; //fixed incorect property 

    res.json(user); //fixed  from res.join(user) to res.json(user)
});

//delete - remove a user
app.delete('/users/:id', (req, res)=> {
    //const userexists = user.some(user=> user.id ==parseInt(req)
    

    users = users.filter(user => user.id !== parseInt(req.params.id))
    res.json({ message: 'User Deleted'});
});

//start the server
app.listen(8000, () => console.log("server is running on port 8000"));
require('dotenv').config(); //acquiring the env file for the constant values
// import express from "express"; (It is another format to import the express i.e. commonJS style)
const express = require('express'); //moduleJS style
const app = express(); //app is very powerul method, as we have acquired it now we use many functionalities by using this
// const port  = 3000;

app.get('/', (req, res) => {
    res.send('Learning Backend from Chai&Backend!!');
});

app.get('/home', (req, res) => {
    res.send('This is the home page!!');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page!!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page!!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running.`);
});
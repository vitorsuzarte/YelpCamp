const express = require('express');
//this is an extra line to prevent error of 'path is undefined' from node (31/03/2022)
const path = require('path')
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/makecampground', async (req, res) => {
    const camp = new Campground({ title: 'My Backyard' });
    await camp.save();
})

app.listen(8080, () => {
    console.log('Serving on port 8080')
})
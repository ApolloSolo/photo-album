const express = require('express');
const req = require('express/lib/request');
const app = express();
const port = 3000;
const path = require('path');
const photoData = require('./photoData.json')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/photos/:album', (req, res) => {
    const {album} = req.params;
    const data = photoData[album];
    if(data){
        res.render('albumes', {data, album});
    } else {res.render('notfound', {album})}
})

app.listen(port, (req, res) => {
    console.log("Listening on 3000!");
})  
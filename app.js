
const express = require('express');
const app = express();

let PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.send('Home Page')
});

app.use(require('./routes/blogs'));
app.use(require('./routes/editblogs'));

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
});
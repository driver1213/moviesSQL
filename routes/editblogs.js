
const express = require('express')
let db = require('../models/database')
let bodyParser = require('body-parser')

const router = express.Router();


router.get('/editblogs', (req, res)=>{

    db.query('SELECT * FROM categories')
    .then((results)=>{
        res.render('editblogs',{
            categories: results
        })
    })
    
});


router.use(bodyParser.urlencoded({ extended: false }));


router.post('/editblogs', (req, res)=>{

    let title = req.body.title;
    let author_id = parseInt(req.body.author_id);
    let category_id = parseInt(req.body.category_id);
    let body = req.body.body;
    let release = req.body.date;
    let summary = req.body.summary
    let imageurl = req.body.imageurl;
    
    db.none("INSERT INTO restaurants (title, author_id, category_id, body, release, summary, imageurl) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [title, author_id, category_id, body, release, summary, imageurl])
    .then(()=>{

        res.redirect('/blogs')
    })
    
    .catch((error)=>{
        console.log(error)
        res.send(error);
    })


    
});


module.exports = router
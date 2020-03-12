
const express = require('express')
const router = express.Router();
let db = require('../models/database');

router.get('/blogs/:blogid', (req, res)=>{
    let blogid = req.params.blogid;

    db.query('SELECT * FROM blogs WHERE id=$1', [blogid])
    .then((results)=>{
        res.render('blogs.ejs',{
            blogs: results[0] // this is an object -this is one record in our database
        })
        .catch((error)=>{
            console.log(error)
        })
    })
});

module.exports = router;

const express = require('express');
let db = require('../models/database');
const router = express.Router();


router.get('/blogs', (req, res)=>{

    db.query('SELECT * FROM blogs')
    .then((results)=>{
        res.render('blogs',{
            
            blogs: results

        })
    })
})


module.exports = router;
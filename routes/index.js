const express = require('express');
let db = require('../models/database');
const router = express.Router();


router.get('/', (req, res)=>{

    db.query('SELECT * FROM blogs')
    .then((results)=>{
        res.render('index.ejs',{
            
            blogs: results

        })
    })
    .catch((error)=>{
        console.log(error)
        res.send(error)
    })
});


module.exports = router;
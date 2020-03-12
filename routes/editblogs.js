
const express = require('express')
let db = require('../models/database')
let bodyParser = require('body-parser')
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));


router.get('/editblogs', (req, res)=>{
    db.query('SELECT * FROM categories')
    .then((catresults)=>{

        db.query('SELECT * FROM authors')
        .then((authresults)=>{

            res.render('editblogs.ejs',{
                categories: catresults,
                authors: authresults
            })

        })
        .catch((error) => {
            console.log("error in authors query: ", error);
        })
        
    })
    .catch((error) => {
        console.log("error in category query", error);
    })
    
});


router.post('/editblogs', (req, res)=>{

    let title = req.body.title;
    let author_id = req.body.author;
    let category_id = req.body.category;
    let body = req.body.body;
    
    let release = "2020-03-12";

    
    db.none("INSERT INTO blogs (title, author_id, category_id, body, release) VALUES ($1, $2, $3, $4, $5)",
        [title, author_id, category_id, body, release])
    .then(()=>{

        res.redirect('/')
    })
    
    .catch((error)=>{
        console.log(error)
        res.send(error);
    })


    
});


module.exports = router
const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav4){
    authorsRouter.get('/', function(req, res){
        Authordata.find()
        .then(function(authors){
            res.render('authors', 
            {
                nav4,
                title: 'Library',
                authors
            });
        })
    });
    
    authorsRouter.get('/:id', function(req, res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render('author', {
                nav4,
                title: 'Library',
                author
            })
        })
    });

    authorsRouter.post('/:id/delete', function(req, res){
        const id = req.params.id;
        Authordata.deleteOne({_id:id})
        .then(function(){
            res.redirect('/authors');
        })
    });

    return authorsRouter;
}

module.exports = router;
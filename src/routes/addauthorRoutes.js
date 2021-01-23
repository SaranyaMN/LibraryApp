const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

var multer  = require('multer');
const storage = multer.diskStorage({
    destination: function(request, file, callback){
        callback(null, './public/images');
    },
    filename: function(request, file, callback){
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});

function router(nav4){
    addauthorRouter.get('/', function(req, res){
        res.render('addauthors', 
        {
            nav4,
            title: 'Library'
        });
    });
    addauthorRouter.post('/add', upload.single('image'), function(req, res){
        var item = {
            name: req.body.name,
            book: req.body.book,
            genre: req.body.genre,
            image: req.file.filename
        }
        var author = Authordata(item);
        author.save();
        res.redirect('/authors');
    });

    return addauthorRouter;
}

module.exports = router;
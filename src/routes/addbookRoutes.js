const express= require('express');
const addbooksRouter=express.Router();
const Bookdata=require('../model/Bookdata');
function router(nav){
    addbooksRouter.get('/',function(req,res){
    res.render("addbooks",
    {
        nav
    })
})

    addbooksRouter.post('/add',function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            img:req.body.img
        }
     var book=Bookdata(item);
     book.save();
    res.redirect('/books');
    });
return addbooksRouter;
}
module.exports = router;
const express= require('express');
const app= express();
const port = process.env.PORT || 5000;
const nav=[
    {link:'/books',name:'Books'},
    {link:'/authors',name:'Authors'},
    {link:'/addbooks',name:'Add Books'},
    {link:'/addauthors',name:'Add Author'},
    {link:'/login',name:'Login'},
    {link:'/signup',name:'Sign Up'}]


const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const addbooksRouter=require('./src/routes/addbookRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);


app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbooks',addbooksRouter);
app.use('/addauthors',addauthorRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


app.listen(port,()=>{console.log("Server Ready at" +port)});

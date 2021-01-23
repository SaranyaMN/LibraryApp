const express = require('express');
const app = new express();
const port = process.env.PORT || 5000;

const nav1 =  [
    {link: '/login', name:'Log In'},
    {link: '/signup', name: 'Sign Up'}
]
const nav2 =  [
    {link: '/login', name:'Log In'}
]
const nav3 =  [
    {link: '/signup', name:'Sign Up'}
]
const nav4 =  [
    {link: '/books', name:'Books'},
    {link: '/authors', name:'Authors'},
    {link: '/addbooks', name:'Add Book'},
    {link: '/addauthors', name:'Add Author'},
    {link: '/login', name:'Log Out'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav4);
const authorsRouter = require('./src/routes/authorRoutes')(nav4);
const signupRouter = require('./src/routes/signupRoutes')(nav2);
const loginRouter = require('./src/routes/loginRoutes')(nav3);
const addbooksRouter = require('./src/routes/addbookRoutes')(nav4);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav4);
const updatebookformRouter = require('./src/routes/updatebookformRoute')(nav4);
const updateauthorformRouter = require('./src/routes/updateauthorformRoute')(nav4);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));  

app.set('view engine', 'ejs'); 
app.set('views', './src/views'); 

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/addbooks', addbooksRouter);
app.use('/addauthors', addauthorRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/updatebookform', updatebookformRouter);
app.use('/updateauthorform', updateauthorformRouter);

app.get('/', function(req, res){
    res.render('index', 
    {
            nav1,
            title: 'Library'
    });
});
app.get('/welcome', function(req, res){
    res.render('welcome',
    {
        nav4,
        title: 'Library'
    });
});

app.listen(port, ()=>{console.log("Server Ready at" +port)});
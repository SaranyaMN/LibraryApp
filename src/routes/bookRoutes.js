const express= require('express');
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:'Emma',
            author:'Jane Austen',
            genre:'Fiction',
            img:"emma.jpg",
            desc:"Emma, fourth novel by Jane Austen, published in three volumes in 1815. Set in Highbury, England, in the early 19th century, the novel centres on Emma Woodhouse, a precocious young woman whose misplaced confidence in her matchmaking abilities occasions several romantic misadventures."
        },
        {
            title:'War and Peace',
            author:'Leo Tolstoy',
            genre:'Historical Fiction',
            img:"war.jpg",
            desc:"War and Peace broadly focuses on Napoleon’s invasion of Russia in 1812 and follows three of the most well-known characters in literature: Pierre Bezukhov, the illegitimate son of a count who is fighting for his inheritance and yearning for spiritual fulfillment; Prince Andrei Bolkonsky, who leaves his family behind to fight in the war against Napoleon; and Natasha Rostov, the beautiful young daughter of a nobleman who intrigues both men."
        },
        {
            title:'The Adventures of Tom Sawyer',
            author:'Mark Twain',
            genre:'Novel',
            img:"sawyer.jpg",
            desc:"Tom Sawyer, an orphan, lives with his Aunt Polly and his half-brother Sid in the fictional town of St. Petersburg, Missouri sometime in the 1840s. A fun-loving boy, Tom skips school to go swimming and is made to whitewash his aunt's fence for the entirety of the next day, Saturday, as punishment."
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",{
            nav,
            book:books[id]
        });
    });
    return booksRouter;
}


module.exports = router;
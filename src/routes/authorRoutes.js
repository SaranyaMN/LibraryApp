const express= require('express');
const authorsRouter=express.Router();
function router(nav){
    var authors=[
        {
            name:'Jane Austen',
            style:'Novelist',
            place:'England',
            img:"jane.jpg",
            desc:"Jane Austen (16 December 1775 – 18 July 1817) was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security. Her works critique the novels of sensibility of the second half of the 18th century and are part of the transition to 19th-century literary realism."
    
        },
        {
            name:'Leo Tolstoy',
            style:'Novelist, Short story writer',
            place:'Russia',
            img:"tolstoy.jpg",
            desc:"Leo Tolstoy was a Russian writer who is regarded as one of the greatest authors of all time. He received nominations for the Nobel Prize in Literature every year from 1902 to 1906 and for the Nobel Peace Prize in 1901, 1902, and 1909. That he never won is a major controversy."
        },
        {
            name:'Mark Twain',
            style:'Novelist',
            place:'United States',
            img:"twain.jpg",
            desc:"Samuel Langhorne Clemens (November 30, 1835 – April 21, 1910), known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the 'greatest humorist the United States has produced', and William Faulkner called him 'the father of American literature'. His novels include The Adventures of Tom Sawyer (1876) and its sequel, the Adventures of Huckleberry Finn (1884), the latter often called 'The Great American Novel'."
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            authors
        });
    });
    authorsRouter.get('/:i',function(req,res){
        const i=req.params.i;
        res.render("author",{
            nav,
            author:authors[i]
        });
    });
    return authorsRouter;
}

module.exports = router;
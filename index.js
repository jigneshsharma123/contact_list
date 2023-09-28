const express = require("express");
const port = 3000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));


//creating a dummy contact list 
var contactList = [
    {
        "name" : "jignesh_sharma",
        "phone" : 34020924324,
    },
    {
        name : "something_else",
        "phone" : 3324093240,
    },
    {
        name: "newContact",
        "phone" : 342049320,
    }
];

app.get('/',(req,res)=> {
    return res.render('home',{

    "title" : "Contact_list",
    contact_list : contactList,
});
 
});  
app.get('/practice',(req,res)=> {
    res.render("practice",{
        title : "welcome to the page"
    });
})
app.post('/create-contact',(req,res)=> {
    // contactList.push({
    //     name : req.body.name,
    //     phone : req.body.phone
    // });
    contactList.push(req.body);

    return res.redirect('/');
})


app.listen(port, (err)=> {
   if(err){
    console.error(err);
   }
   console.log(`Server is running on the http://localhost:${port}`);
});
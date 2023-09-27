const express = require("express");
const port = 3000;
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.get('/',(req,res)=> {
    res.send("<h1>this is render by expressjs</h1>")
}); 


app.listen(port, (err)=> {
   if(err){
    console.error(err);
   }
   console.log(`Server is running on the http://localhost:${port}`);
});
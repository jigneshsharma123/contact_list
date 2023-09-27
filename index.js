const express = require("express");
const port = 3000;
const app = express();



app.listen(port, (err)=> {
   if(err){
    console.error(err);
   }
   console.log(`Server is running on the http://localhost:${port}`);
});
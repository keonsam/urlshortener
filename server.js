"use strict";
const express = require('express')
const app = express()
const sassMiddleware = require('node-sass-middleware');
const Base58 = require('base58');
const bodyParser = require('body-parser');
const path  = require('path');
const VIEWS = path.join(__dirname, 'public');
const database = require('./database')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(VIEWS));
app.get('/', function(req, res){
 res.sendFile(`${VIEWS}/index.html`);
});
app.post('/form', (res, req)=>{
  const longUrl = res.body.str;
  const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  if(regex.test(longUrl)){
  const shortUrl = Base58.encode(Math.floor(Math.random()*100000));
  console.log(shortUrl);
}else{
  console.log('please fix the url Example "www.google.com"');
}
});
/*app.get('/:data',(req,res)=>{
  const date = req.params.data
  Json = {
    "original link":
    "shorten link":
  }
  res.json(Json)
})*/
app.listen(process.env.PORT || 3000, ()=>{
  console.log('working')
})

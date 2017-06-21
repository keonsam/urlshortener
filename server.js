"use strict";
const express = require('express')
const app = express()
let Json = {}
const path  = require('path');
const VIEWS = path.join(__dirname, 'public');
const sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
  src: __dirname + '/public',
  dest: '/tmp'
}));
app.use(express.static(VIEWS));
app.use(express.static('/tmp'));
app.get('/', function(req, res){
 res.sendFile(`${VIEWS}/index.html`)

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

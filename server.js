"use strict";
const express = require('express')
const app = express()
const sassMiddleware = require('node-sass-middleware');
let Json = {}
const path  = require('path');
const VIEWS = path.join(__dirname, 'public');
const VIEWS2 = path.join(__dirname, 'public/sass/style.css');
app.use(sassMiddleware({
  src: VIEWS2,
  dest: VIEWS2,
  //debug: true,
  //outputStyle: 'compressed',
}));
app.use(express.static(VIEWS));
app.use(express.static(VIEWS2));
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

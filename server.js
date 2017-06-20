"use strict";
const express = require('express')
const app = express()
let Json = {}
const path  = require('path');
const VIEWS = path.join(__dirname, 'public');

app.get('/', function(req, res){
  res.sendFile('index.html',{ root : VIEWS })

})
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

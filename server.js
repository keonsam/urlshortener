"use strict";
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Base58 = require('base58');
const bodyParser = require('body-parser');
const path  = require('path');
const VIEWS = path.join(__dirname, 'public');
const database = require('./database')
let Json = {

}

mongoose.connect(process.env.MONGO_URI || 'mongodb://glitch:someone@ds123182.mlab.com:23182/urlshorter');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(VIEWS));
app.get('/', function(req, res){
 res.sendFile(`${VIEWS}/index.html`);
});
app.post('/form', (req, res)=>{
  const longUrl = req.body.str;
  const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  if(regex.test(longUrl)){
  const shortUrl = Base58.encode(Math.floor(Math.random()*100000));
  Json = new database({
    originalUrl: longUrl,
    shortenUrl: shortUrl
  });
  Json.save(err =>{
    if(err){
      return res.send('Error saving to database');
    }
  });
  return res.send(Json);
}else{
  return res.send('please fix the url Example "www.google.com"');
}
});
app.get('/:data',(req,res)=>{
  const url = req.params.data
  database.findOne({'shortenUrl': url}, (err, data)=>{
    if(err) return res.send('Error 404, No Item found');
    const regex1 = new RegExp("^(http|https)://", "i");
    const regex2 = new RegExp("www.+?");
    const original = data.originalUrl;
    if(regex1.test(original)){
      return res.redirect(original);
    }else if(regex2.test(original)){
      return res.redirect("http://"+ original);
    }else{
      return res.redirect("http://www."+original);
    }
  });
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('working')
})

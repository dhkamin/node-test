const express = require('express');
const app = express();
const auth = require('./server/routing/auth')
const quiz = require('./server/routing/quiz')
const bodyparser = require('body-parser');
const cors = require('cors');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static(__dirname+"/dist"))

app.use('/auth',auth);
app.use('/quiz',quiz);

app.get('*',(req,res,next)=>{
  res.sendFile(__dirname+'/dist/index.html');
})

app.listen(3000,(err)=> {
  console.log('listen on port 3000');
});

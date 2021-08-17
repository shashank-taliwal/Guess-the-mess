const express=require('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public/"));
// app.set('view engine','ejs');
const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/home.html');
});

app.get('/game',(req,res)=>{
    res.sendFile(__dirname+'/game.html');
});
app.get('/feedback',(req,res)=>{
    res.sendFile(__dirname+'/feedback.html')
})
app.listen(port,()=>{
    console.log('server started at port '+ port);
});
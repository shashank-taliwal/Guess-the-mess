const express=require('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.set('view engine','ejs');
const port=process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.render('home');
});
app.listen(port,()=>{
    console.log('server started at port '+ port);
});
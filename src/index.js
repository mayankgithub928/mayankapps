const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const viewPath=path.join(__dirname,'../templates/views');
console.log(viewPath);

const partialPath=path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);


//app.use(express.static(path.join(__dirname,'../public')));
app.get('/',(req,res)=>{
    res.render('index');
   
})
app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/weather',(req,res)=>{
    res.render('weather');
})
app.get('*',(req,res)=>{
    res.render('404',
    {
        errorMsg:"This page doens't exist"
    }
);
})


app.listen(port,()=>{
    console.log('web proj server started');
    console.log(path.join(__dirname,'../public'));
    
});
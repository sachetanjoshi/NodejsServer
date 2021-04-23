const express = require('express');
//exxpress app
const app = express();


//register view engine
app.set('view engine','ejs');//configure app settings using set method


//listen for requests
app.listen(3000);

app.get('/',(req, res)=>{
  //res.send('<p>Home Page</p>');
  //res.sendFile('./views/index.html', {root : __dirname});
  const blogs = [
    {title: 'Euro Super league', snippet:' Not good for the future of football'},
    {title: 'Bruno Fernandes', snippet: 'Best attacking midfielder in theworld'},
    {title: 'How to defeat the Euro Super League', snippet: 'Fans and players to unite'}
  ]
  res.render('index', {title: 'home', blogs});
})
app.get('/about',(req, res)=>{
  //res.send('<p>About Page</p>');
  //res.sendFile('./views/about.html', {root : __dirname});
  res.render('about',{title: 'About Us'});
})

//redirects
app.get('/about-us',(req,res)=>{
  res.redirect('/about',);
})

app.get('/blogs/create', (req,res)=>{
  res.render('create',{title: 'Create Blog'});
});
//error
app.use((req,res)=>{
  //res.sendFile('./views/404.html',{root: __dirname})
  res.status(404).render('404',{title: '404'});
})
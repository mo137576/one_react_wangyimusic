
let express=require('express');
let app=express();
let path=require('path');
let home=require('./routes/home');
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.resolve('node_modules')));
app.use(express.static(path.resolve('icon')));
app.use('/',home);
app.listen(8080);

var express=require('express');
var app=express();
//whatever is in the module.export of todocontroller .js is stored here 
var todocontroller=require('./controllers/todocontroller');
//set template engine
app.set('view engine','ejs');
//static files usage,not making it route specific
app.use(express.static('./public'));
//fire controller
todocontroller(app); //as it takes the parameter app hece we pass the app var present in line 2
app.listen(3000);
console.log('self love');
//by passing the app in line 10 we can now set up our routes in todocontroller.js 
// to allow post request we use bodyparser
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:test@cluster0.tt17o.mongodb.net/todoretryWrites=true&w=majority',{ useNewUrlParser: true });
var todoSchema=new mongoose.SchemaType({
    item:String
});
var Todo=mongoose.model('Test',todoSchema);
var itemOne=Todo({item:'buy flowers'}).save(function(err){
    if(err)throw err;
    console.log('item saved');
});
//to add some data dynamically to the server we create an array of obj
var data=[{item:'make bed'}, {item:'read books'},{item:'listen jazz'}];

var urlencodedParser=bodyParser.urlencoded({extended:false}); 
module.exports =function(app){
app.get('/todo',function(req,res){
res.render('todo',{todos:data});
});
app.post('/todo',urlencodedParser,function(req,res){
 
    data.push(req.body);
 res.json(data);
});
app.delete('/todo/:item',function(req,res){
 data=data.filter(function(todo){
     return todo.item.replace(/ /g,'-' )!==req.params.item;
 });
  res.json(data);  
});
};

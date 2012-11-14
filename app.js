var express   = require('express')
  , http      = require('http')
  , path      = require('path')
  , mongoose  = require('mongoose')
  , Schema    = mongoose.Schema;

//mongoose.connect("mongodb://localhost/blogs",function(err){
mongoose.connect("mongodb://shane:evaporated@staff.mongohq.com:10008/plannable",function(err){
if(err){
throw err;
}else{
console.log('connected to database baby!')
}
});

var Post_Schema = new Schema({
    title : String,
    date : String,
    content: String,
    catergory : String,
    disqus: String
    })

var Resource_Schema = new Schema({
  title   : String,
  date    : String,
  catergory : String,
  author : String,
  img : String,
  description : String
})


var Post_Model = mongoose.model('blog' , Post_Schema)
var Resource_Model = mongoose.model('resource' , Resource_Schema)

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req,res){
  res.render('index');
});

app.get('/posts' , function(req , res){
  Post_Model.find({} , function(err , doc){
    console.log( doc )
    res.send( doc )
  })
})

app.get('/resources' , function(req , res){
  Resource_Model.find({} , function(err , doc){
    console.log( doc )
    res.send( doc )
  })
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
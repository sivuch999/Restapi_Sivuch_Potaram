var express = require('express');
var app = express();
var users = require('./user');
var cors = require('cors');

var port = process.env.PORT || 8888;

app.use(express.static('public'));
app.use(cors());

app.get('/', function (req, res) {
    res.send('<h1><a href="/user/id/1/null ">REST API Connect</a></h1>');
});

app.get('/user',(req,res)=>{
	users.findAll((err,data)=>{
        if(data){
            if(data.length > 0){res.json(data);}else{res.json("ไม่พบข้อมูล");}
        }else{
            console.log(err);
        }
	});
});

app.get('/user/:type/:val1/:val2',(req,res)=>{
    var type = req.params.type
    var val1 = req.params.val1;
    var val2 = req.params.val2;
    // res.json(users.findById(type,val));
	users.findById(type,val1,val2,(err,data)=>{
        if(data){
            if(data.length > 0){res.json(data);}else{res.json("ไม่พบข้อมูล");}
        }else{
            console.log(err);
        }
	});
});

app.post('/newuser',(req, res)=>{
    var json = req.body;
    res.send('Add new ' + json.name + ' Completed!');
});

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
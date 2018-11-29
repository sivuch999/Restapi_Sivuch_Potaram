var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('user.db');

var customer = [
    {
        "id": 1,
        "username": "goldroger",
        "name": "Gol D. Roger",
        "position": "Pirate King"
    },
    {
        "id": 1,
        "username": "mrzero",
        "name": "Sir Crocodile",
        "position": "Former-Shichibukai"
    },
    {
        "id": 3,
        "username": "luffy",
        "name": "Monkey D. Luffy",
        "position": "Captain"
    },
    {
        "id": 4,
        "username": "kuzan",
        "name": "Aokiji",
        "position": "Former Marine Admiral"
    },
    {
        "id": 5,
        "username": "shanks",
        "name": "'Red-Haired' Shanks",
        "position": "The 4 Emperors"
    }
];

// exports.findAll = function(){
//     db.serialize(function(){
//         var d = db.all("SELECT * FROM users LIMIT 5",function(err,row){
//             if(err){
//                 console.log(err);
//             }else{
//                 // console.log(customer);
//                 // console.log(".............................");
//                 console.log(row);
//             }
//         });
//     });
//     db.close();
// };

exports.findAll = function(data){
    var sql = "SELECT * FROM users";
    db.serialize(function(){
        db.all(sql,data);
    });
};

exports.findById = function(type,val1,val2,data){
    var stack = new Array();
    var bfail = false;
    var condition;
    if(val2 == 'null'){
        if(type == "first_name" ||type == "last_name" ||type == "email"){
            condition = " WHERE "+type+" LIKE'%"+val1+"%' ORDER BY "+type+" ASC";
        }else if(type == "age_single"){
            condition = " WHERE age = '"+val1+"' ORDER BY age ASC";
        }else if(type == "id"){
            condition = " WHERE "+type+" = '"+val1+"' ORDER BY id";
        }else if(type == "gender"){
            condition = " WHERE "+type+" = '"+val1+"' ORDER BY first_name";
        }else{
            bfail = true;
        }
    }else{
        condition = " WHERE age >= '"+val1+"' AND age <= '"+val2+"' ORDER BY age ASC";
    }
    var sql = "SELECT * FROM users"+condition;
    // console.log(sql);
    if(!bfail){db.serialize(function(){db.all(sql,data);});}
};
// exports.findById = function (id) {
//     for (var i = 0; i < customer.length; i++) {
//         if (customer[i].id == id) return customer[i];
//     }
// };
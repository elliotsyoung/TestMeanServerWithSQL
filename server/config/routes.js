var connection = require('../config/mysql');
module.exports = function(app) {
  app.get('/users', function(req, res){
    console.log("request: get /");
    query = "select * from users"
    connection.query(query, function(err, data){
      if(err){
        console.log(err)
        res.json(err)
      }else{
        res.json(data);
      }
    })
  })
  app.post('/users', function(req, res){
    console.log("request: post /users");
    console.log(req.body.email, req.body.password);
    data = {
      email: req.body.email,
      password: req.body.password
    }
    query = "INSERT INTO `mydb`.`users` SET ?, created_at = NOW(), updated_at = NOW() "
    connection.query(query, data, function(err){
      if (err)
        console.log(err);
      else {
        console.log("successfully added member to database");
        res.json("success!")
      }
    })
  })
}

var bodyParser = require('body-parser');
var Employee = require('../model/employee');

module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.get('/api/employees', function(req, res) {
    Employee.find({}, function(err, employees) {
      if(err) throw err;
      res.send(employees);
    });
  });

  app.get('/api/employees/:empId', function(req, res){
    Employee.find({ empId: req.params.empId }, function(err, employee) {
      if(err) throw err;
      res.send(employee);
    });
  });
}

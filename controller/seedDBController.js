var Employee = require('../model/employee');

module.exports = function(app) {
  app.get('/api/seedDB', function(req, res) {

    var starterEmployees = [
      {
      	employeeId: 128,
      	firstName: "Shivam",
      	lastName: "Kapoor",
      	dob: new Date(),
      	gender: "Male",
      	address: {
      		houseNumber: "102A",
      		street: "1st Cross, 18th Main, 6th Block, Koramangala",
      		city: "Bangalore",
      		state: "Karnataka",
      		pinCode: "560095"
      	},
      	phone: 9663006554,
      	mailId: "shivam.kapoor@glassbeam.com",
      	doj: new Date(),
      	designation: "Sr. Big Data Developer",
      	department: "gbstudio",
      	salary: 1600000,
      	managerId: 19
      }
    ];

    Employee.create(starterEmployees, function(err, results) {
      res.send(results);
    });
  });
};

var Employee = require('../model/employee');

module.exports = function(app) {
  app.get('/api/seedDatabase', function(req, res) {

    var starterEmployees = [
      {
      	empId: 128,
      	firstName: "Kunal",
      	lastName: "Mehra",
      	dob: new Date(),
      	gender: "Male",
      	address: {
      		houseNumber: "11",
      		street: "1st Cross, 19th Main, 5th Block, Koramangala",
      		city: "Bangalore",
      		state: "Karnataka",
      		pinCode: "560095"
      	},
      	phone: 9661206887,
      	mailId: "kunal.mehra@glassbeam.com",
      	doj: new Date(),
      	designation: "Software Developer",
      	department: "development",
      	salary: 850000,
      	managerId: 19
      },
      {
        empId: 129,
        firstName: "Vishal",
        lastName: "Kamat",
        dob: new Date(),
        gender: "Male",
        address: {
          houseNumber: "12",
          street: "1st Cross, 11th Main, 6th Block, Halasuru",
          city: "Bangalore",
          state: "Karnataka",
          pinCode: "560042"
        },
        phone: 8963006554,
        mailId: "vishal.kamat@glassbeam.com",
        doj: new Date(),
        designation: "Technical Lead",
        department: "development",
        salary: 1100000,
        managerId: 19
      }
    ];

    Employee.create(starterEmployees, function(err, results) {
      if(err) throw err;
      res.send(results);
    });
  });
};

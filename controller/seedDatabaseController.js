var Employee = require('../model/employee');

// TODO: Seed only when there is no data present already in the database.
// TODO: Configure in-memory database.

module.exports = function(app) {
  app.get('/api/seedDatabase', function(req, res) {

    var starterEmployees = [
      {
        empId: 19,
        firstName: "Rohan",
        lastName: "Sinha",
        dob: new Date("March 25 1970"),
        gender: "Male",
        address: {
          houseNumber: "1",
          street: "21st Cross, 1th Main, 5th Block, Indira Nagar",
          city: "Bangalore",
          state: "Karnataka",
          pinCode: 560033
        },
        phone: 9661206887,
        email: "roshan.sinha@glassbeam.com",
        doj: new Date("January 16 2015"),
        designation: "Engineering Manager",
        salary: 1850000
      },
      {
        empId: 128,
        firstName: "Kunal",
        lastName: "Mehra",
        dob: new Date("October 15 1987"),
        gender: "Male",
        address: {
          houseNumber: "11",
          street: "1st Cross, 19th Main, 5th Block, Koramangala",
          city: "Bangalore",
          state: "Karnataka",
          pinCode: 560095
        },
        phone: 9661206887,
        email: "kunal.mehra@glassbeam.com",
        doj: new Date("March 21 2017"),
        designation: "Software Developer",
        salary: 850000,
        managerId: 19
      },
      {
        empId: 129,
        firstName: "Neha",
        lastName: "Kamat",
        dob: new Date("December 29 1985"),
        gender: "Female",
        address: {
          houseNumber: "12",
          street: "1st Cross, 11th Main, 6th Block, Halasuru",
          city: "Bangalore",
          state: "Karnataka",
          pinCode: 560042
        },
        phone: 8963006554,
        email: "neha.kamat@glassbeam.com",
        doj: new Date("August 3 2013"),
        designation: "Technical Lead",
        salary: 1100000,
        managerId: 19
      }
    ];

    Employee.create(starterEmployees, function(err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
};

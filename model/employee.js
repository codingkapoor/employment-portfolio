var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  employeeId: Number,
  firstName: String,
  lastName: String,
  dob: Date,
  gender: String,
  address: {
    houseNumber: String,
    street: String,
    city: String,
    state: String,
    pincode: String
  },
  phone: Number,
  mailId: String,
  doj: Date,
  desgination: String,
  department: String,
  salary: Number,
  managerId: Number
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;

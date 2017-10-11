var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
  empId: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  address: {
    houseNumber: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: Number, required: true }
  },
  phone: { type: Number, required: true,
    validate: {
          validator: function(phone) {
            return /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(phone);
          },
          message: '{VALUE} is not a valid phone number!'
        }
      },
  email: { type: String, required: true,
    validate: {
          validator: function(email) {
            return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
          },
          message: '{VALUE} is not a valid email address!'
        }
      },
  doj: { type: Date, required: true },
  designation: { type: String, required: true },
  salary: { type: Number, required: true },
  managerId: Number
});

var Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;

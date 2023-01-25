const mongoose = require("mongoose");
const AppointmentSchema = mongoose.Schema({
  date: {
    type: Date,
    require: true,
  },
  service:{ 
    type:{},
    require: true,
  }
});
module.exports = mongoose.model("Appointment", AppointmentSchema);

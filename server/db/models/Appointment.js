const { Schema, model } = require("mongoose");

const AppointmentSchema = new Schema(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    telephone: { type: String },
    address: { type: String },
    appointTime: { type: Date, required: true },
    customerProblem: { type: String },
  },
  { timestamps: true }
);

module.exports = model("Appointment", AppointmentSchema);

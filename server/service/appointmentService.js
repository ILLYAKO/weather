const Appointment = require("../db/models/Appointment");

class AppointmentService {
  async create(appointmentData) {
    console.log("AppointmentService.create", appointmentData);
    const appointment = await Appointment.create(appointmentData);
    return appointment;
  }
}
module.exports = new AppointmentService();

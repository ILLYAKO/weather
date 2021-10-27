const { DateTime } = require("luxon");
const Appointment = require("../db/models/Appointment");

class AppointmentService {
  async create(appointmentData) {
    const appointment = await Appointment.create(appointmentData);
    return appointment;
  }

  async findPerMonth(monthday) {
    const appointments = await Appointment.find({
      appointTime: {
        $gte: DateTime.fromJSDate(new Date(monthday + " 00:00 AM"))
          .startOf("month")
          .toUTC()
          .toString(),
        $lte: DateTime.fromJSDate(new Date(monthday + " 00:00 AM"))
          .endOf("month")
          .toUTC()
          .toString(),
      },
    });
    return appointments;
  }
}

module.exports = new AppointmentService();

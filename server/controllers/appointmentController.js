const appointmentService = require("../service/appointmentService");

class AppointmentController {
  async create(req, res, next) {
    try {
      const appointment = req.body;
      const appointmentData = await appointmentService.create(appointment);
      return res.json(appointmentData);
    } catch (e) {
      next(e);
    }
  }

  async findPerMonth(req, res, next) {
    try {
      const monthday = req.params.permonthday;
      const appointments = await appointmentService.findPerMonth(monthday);
      return res.json(appointments);
    } catch (e) {
      next(e);
    }
  }

  async findPerDay(req, res, next) {
    try {
      const day = req.params.perday;
      const appointments = await appointmentService.findPerDay(day);
      return res.json(appointments);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AppointmentController();

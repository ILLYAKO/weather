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
}

module.exports = new AppointmentController();

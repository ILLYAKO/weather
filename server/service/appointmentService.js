class AppointmentService {
  async create(appointment) {
    console.log("AppointmentService.create", appointment);
  }
}
module.exports = new AppointmentService();

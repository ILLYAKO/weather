const Router = require("express");
const { body } = require("express-validator");
const AppointmentController = require("../controllers/appointmentController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = new Router();

/*  /appointment */
router.post("/create", AppointmentController.create);
router.get("/month/:permonthday", AppointmentController.findPerMonth);
router.get("/day/:perday", AppointmentController.findPerDay);




module.exports = router;
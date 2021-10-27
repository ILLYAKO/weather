import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { DateTime } from "luxon";

import {
  appointmentCreate,
  appointmentsFindPerDay,
} from "../../../store/utils/thunkCreators";
import "./style.css";

const AppointmentPage = (props) => {
  let history = useHistory();

  const {
    // appointment, isLoading, error,
    appointmentCreate,
    appointmentsFindPerDay,
    appointments,
  } = props;

  const [appointmentForm, setAppointmentForm] = useState({});
  const [isTimepikerActive, setIsTimepikerActive] = useState(false);
  const [appointmentsTimeList, setAppointmentsTimeList] = useState([]);

  console.log("appointmentsTimeList:", appointmentsTimeList);

  const handleDayChange = async (event) => {
    const value = event.target.value;
    setAppointmentForm({
      ...appointmentForm,
      [event.target.name]: value,
    });
    await appointmentsFindPerDay(DateTime.fromISO(value));
    setAppointmentsTimeList(setTimeList(value));
    setIsTimepikerActive(true);
  };

  const setTimeList = (day) => {
    const startTime = DateTime.fromJSDate(new Date(day.concat(" 9:00 AM")));
    const appointmentsTotal = 9 * 4;
    const arrayTemp = [...Array(appointmentsTotal)].map((item, index) => {
      return startTime
        .plus({ minutes: index * 15 })
        .toLocaleString(DateTime.TIME_SIMPLE);
    });

    return arrayTemp;
  };

  const setSelectOptions = (appointments, appointmentsTimeList) => {
    const appointmentsTimeOnly = appointments.map((item) =>
      DateTime.fromISO(item).toLocaleString(DateTime.TIME_SIMPLE)
    );

    return (
      <>
        <option value="">Please choose a time from list</option>{" "}
        {appointmentsTimeList
          ?.filter((item) => !appointmentsTimeOnly.includes(item))
          .map((item, i) => (
            <option key={i} value={item.toLocaleString(DateTime.TIME_SIMPLE)}>
              {item.toLocaleString(DateTime.TIME_SIMPLE)}
            </option>
          ))}
      </>
    );
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setAppointmentForm({
      ...appointmentForm,
      [event.target.name]: value,
    });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const appointment = appointmentForm;
    await appointmentCreate(appointment);
    history.push("/");
  };

  return (
    <div className="container  pb-5">
      <div className="py-5 text-center">
        <h3>Booking form</h3>
        <p className="lead">Please fill some fields.</p>
      </div>

      <div className="col-md-7 col-lg-8 ">
        <form
          className="needs-validation"
          id="appointmentFormId"
          name="appointmentForm"
          onSubmit={onSubmitHandler}
        >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder=""
                //   value=""
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder=""
                //   value=""
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="you@example.com"
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="telephone" className="form-label">
                Telephone <span className="text-muted">(Optional)</span> Tel.
                format: 416-392-2489
              </label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                name="telephone"
                placeholder="XXX-XXX-XXXX"
                onChange={handleChange}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
              <div className="invalid-feedback">
                Please enter your telephone.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="1234 Main St, City"
                onChange={handleChange}
              />
              <div className="invalid-feedback">Please enter your address.</div>
            </div>
            <div className="row ">
              <label className="form-label">
                Choose a day and then time for meeting:
              </label>
              <div className="col-sm-6">
                <div className="input-group">
                  <input
                    type="date"
                    className="form-control input-day"
                    id="dayPicker"
                    name="day"
                    onChange={handleDayChange}
                    min={new Date().toLocaleDateString("en-CA")}
                    required
                  />
                </div>
                <small>Working week is Monday to Friday</small>
                <div className="invalid-feedback">Valid time is required.</div>
              </div>
              {isTimepikerActive && (
                <div className="col-sm-6">
                  <div className="input-group input-group-time">
                    <select
                      className="form-control select-time"
                      id="timePicker"
                      name="time"
                      onChange={handleChange}
                      required
                    >
                      {setSelectOptions(appointments, appointmentsTimeList)}
                    </select>
                    <span
                      className="input-group-text span-clock"
                      id="basic-addon1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                    </span>
                  </div>
                  <small>Office hours are 9:00am to 6:00pm</small>
                  <div className="invalid-feedback">
                    Valid time is required.
                  </div>
                </div>
              )}
            </div>
            <div className="col-12">
              <label htmlFor="customerProblem" className="form-label">
                What is a problem?
                <span className="text-muted">(Optional)</span>
              </label>
              <textarea
                className="form-control"
                id="customerProblem"
                name="customerProblem"
                placeholder=" Please type your problem here.
                For example, It looks like a rather blustery day, today."
                onChange={handleChange}
                rows="4"
                cols="50"
              />
              <div className="invalid-feedback">Please enter your address.</div>
            </div>
          </div>
          <button className="w-100 btn btn-primary btn-lg mt-3" type="submit">
            Continue to booking
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointment: state.appointmentReducer.appointment,
    appointments: state.appointmentReducer.appointments,
    isLoading: state.appointmentReducer.isLoading,
    error: state.appointmentReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appointmentCreate: (credentials) => {
      dispatch(appointmentCreate(credentials));
    },
    appointmentsFindPerDay: (day) => {
      dispatch(appointmentsFindPerDay(day));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentPage);

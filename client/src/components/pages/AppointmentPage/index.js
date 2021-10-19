import React, { useRef } from "react";

const AppointmentPage = (props) => {
   const form = useRef(null);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const appointmentForm = new FormData(form.current);
    // console.log("appointmentForm", appointmentForm);
    // // Display the key/value pairs
    // for (var pair of appointmentForm.entries()) {
    //   console.log(pair);
    //   console.log(pair[0] + ": " + pair[1]);
    // }
  };

  return (
    <div className="container  pb-5">
      <div className="py-5 text-center">
        <h3>Booking form</h3>
        <p className="lead">Please fill some fields.</p>
      </div>

      <div className="col-md-7 col-lg-8 ">
        {/* <form className="needs-validation" novalidate> */}
        <form
          className="needs-validation"
          id="appointmentFormId"
          name="appointmentForm"
          ref={form}
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
                required
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email <span className="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
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
                placeholder="XXX-XXX-XXXX"
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
                placeholder="1234 Main St, City"
              />
              <div className="invalid-feedback">Please enter your address.</div>
            </div>
            <div className="row">
              <label className="form-label">
                Choose a day and time for meeting:
              </label>
              <div className="col-sm-6">
                <select
                  className="form-control"
                  id="timePicker"
                  name="timePicker"
                  required
                >
                  <option value="">Please choose a time</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="09:30 AM">09:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                </select>
                <small>Office hours are 9:00am to 6:00pm</small>
                <div className="invalid-feedback">Valid time is required.</div>
              </div>

              <div className="col-sm-6">
                <input
                  type="date"
                  className="form-control"
                  id="dayPicker"
                  name="dayPicker"
                  required
                />
                <small>Working week is Monday to Friday</small>

                <div className="invalid-feedback">Valid time is required.</div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="customerProblem" className="form-label">
                What is a problem?{" "}
                <span className="text-muted">(Optional)</span>
              </label>
              <textarea
                className="form-control"
                id="customerProblem"
                name="customerProblem"
                placeholder=" Please type your problem here.
                For example, It looks like a rather blustery day, today."
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

export default AppointmentPage;

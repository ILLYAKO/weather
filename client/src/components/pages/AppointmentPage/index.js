import React from "react";

const AppointmentPage = () => {
  return (
    <div class="container  pb-5">
      <div class="py-5 text-center">
        <h3>Booking form</h3>
        <p class="lead">Please fill some fields.</p>
      </div>

      <div class="col-md-7 col-lg-8 ">
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                //   value=""
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                //   value=""
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">
                Email <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="telephone" class="form-label">
                Telephone <span class="text-muted">(Optional)</span> Tel.
                format: 416-392-2489
              </label>
              <input
                type="tel"
                class="form-control"
                id="telephone"
                placeholder="XXX-XXX-XXXX"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              />
              <div class="invalid-feedback">Please enter your telephone.</div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">
                Address <span class="text-muted">(Optional)</span>
              </label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St, City"
              />
              <div class="invalid-feedback">Please enter your address.</div>
            </div>
            <div class="row">
              <label class="form-label">
                Choose a day and time for meeting:
              </label>
              <div class="col-sm-6">
                <select class="form-control" id="timePicker" name="timePicker">
                  <option value="06:40">06:40</option>
                  <option value="08:24">08:24</option>
                  <option value="12:31:30">12:31:30 </option>
                  <option value="23:59:59.999">23:59:59.999</option>
                </select>
                <small>Office hours are 9am to 6pm</small>
                <div class="invalid-feedback">Valid time is required.</div>
              </div>

              <div class="col-sm-6">
                <input
                  type="date"
                  class="form-control"
                  id="dayPicker"
                  name="dayPicker"
                />
                <small>Working week is Monday to Friday</small>

                <div class="invalid-feedback">Valid time is required.</div>
              </div>
            </div>
            <div class="col-12">
              <label for="customerProblem" class="form-label">
                What is a problem? <span class="text-muted">(Optional)</span>
              </label>
              <textarea
                class="form-control"
                id="customerProblem"
                name="customerProblem"
                placeholder=" Please type your problem here.
                For example, It looks like a rather blustery day, today."
                rows="4"
                cols="50"
              />

              <div class="invalid-feedback">Please enter your address.</div>
            </div>
          </div>

          <button class="w-100 btn btn-primary btn-lg mt-3" type="submit">
            Continue to booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;

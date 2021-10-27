import React from "react";
import { DateTime } from "luxon";
import AppointmentModalProperty from "../AppointmentModalProperty";

const AppointmentModal = ({ appointmentData }) => {
  return (
    <div
      className="modal fade text-dark"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="exampleModalLabel">
              Appointment at{" "}
              {new DateTime.fromISO(appointmentData.appointTime).toFormat("t")}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-column">
            <AppointmentModalProperty
              keyTag="First Name"
              valueTag={appointmentData?.firstName}
            />
            <AppointmentModalProperty
              keyTag="Last Name"
              valueTag={appointmentData?.lastName}
            />{" "}
            <AppointmentModalProperty
              keyTag="Email"
              valueTag={appointmentData?.email}
            />{" "}
            <AppointmentModalProperty
              keyTag="Telephone"
              valueTag={appointmentData?.telephone}
            />{" "}
            <AppointmentModalProperty
              keyTag="Address"
              valueTag={appointmentData?.address}
            />
            <AppointmentModalProperty
              keyTag="Time"
              valueTag={appointmentData?.appointTime}
            />
            <AppointmentModalProperty
              keyTag="Problem"
              valueTag={appointmentData?.customerProblem}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

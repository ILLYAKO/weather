import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { DateTime } from "luxon";
import "./style.css";
import { appointmentsPerMonth } from "../../../store/utils/thunkCreators";

const CalendarPage = (props) => {
  const [dayX, setDayX] = useState(DateTime.local().toUTC()); // important utc format
  const startDay = dayX.startOf("month").startOf("week");
  const totalDays = 42;
  const calendar = [...Array(totalDays)].map((item, index) => {
    return startDay.plus({ days: index });
  });

  const { appointmentsPerMonth, appointments } = props;

  useEffect(() => {
    appointmentsPerMonth(dayX);
    // console.log("UE - appointments: ", appointments?.length);
    // eslint-disable-next-line
  }, [dayX]);

  return (
    <div className="container">
      {/* {appointments?.map((item) => <p>{item.appointTime}</p>)} */}
      <div className="calendar-header bg-dark text-white ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            onClick={async () => {
              await setDayX((prevState) => prevState.minus({ years: 1 }));
            }}
          >
            <path
              fillRule="evenodd"
              d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
            <path
              fillRule="evenodd"
              d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
            onClick={() => setDayX(dayX.minus({ months: 1 }))}
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div>
          <span>{dayX.monthLong.toString()}, </span>
          <span>{dayX.year.toString()}</span>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
            onClick={async () => {
              await setDayX((prevState) => prevState.plus({ months: 1 }));
              // console.log("Click", dayX);
              // await appointmentsPerMonth(dayX);
            }}
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-double-right"
            viewBox="0 0 16 16"
            onClick={async () =>
              await setDayX((prevState) => prevState.plus({ years: 1 }))
            }
          >
            <path
              fillRule="evenodd"
              d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
            />
            <path
              fillRule="evenodd"
              d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div className="grid-wrapper-header">
        {[...Array(7)].map((_, index) => {
          return (
            <div
              key={index}
              className={`cell-wrapper-header bg-dark text-white pe-2`}
            >
              {DateTime.local(2021, 3, index + 1).weekdayLong}
            </div>
          );
        })}
      </div>
      <div className="grid-wrapper">
        {calendar.map((item) => (
          <div
            key={item}
            className={`cell-wrapper  pe-2 ${
              DateTime.now().toUTC().startOf("day").toString() ===
              item.startOf("day").toString()
                ? "bg-primary text-white"
                : ["6", "7"].includes(item.weekday.toString())
                ? "bg-danger text-white"
                : DateTime.now().toUTC().month.toString() ===
                  item.month.toString()
                ? "bg-secondary text-white"
                : "bg-secondary "
            } `}
          >
            {item.toFormat("d").toString()}-x-{appointments.length}
            {appointments
              .filter(
                (appointment) =>
                  item.startOf("day").toString() ===
                  DateTime.fromISO(appointment.appointTime, { zone: "utc" })
                    .startOf("day")
                    .toString()
              )
              .map((event) => (
                <p>
                  {DateTime.fromISO(event.appointTime, { zone: "utc" })
                    .toLocal()
                    .toFormat("t")
                    .toString()}
                </p>
              ))}
          </div>
        ))}
      </div>

      {/* // */}
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* // */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log("state:", state);
  return {
    appointment: state.appointmentReducer.appointment,
    appointments: state.appointmentReducer.appointments,
    isLoading: state.appointmentReducer.isLoading,
    error: state.appointmentReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appointmentsPerMonth: (dayX) => {
      dispatch(appointmentsPerMonth(dayX));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);

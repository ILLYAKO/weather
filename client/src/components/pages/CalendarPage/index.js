import React from "react";
import {
  DateTime,
  //  Info
} from "luxon";
import "./style.css";

const CalendarPage = () => {
  const dayX = DateTime.local();
  const startDay = dayX.startOf("month").startOf("week");
  const endDay = dayX.endOf("month").endOf("week");
  const totalDays = 42;
  const calendar = [...Array(totalDays)].map((item, index) => {
    return startDay.plus({ days:index });
  });

  return (
    <div className="container">
      <h4>Today: {dayX.toString()}</h4>
      <h5>{dayX.monthLong.toString()}</h5>

      <hr />
      <div className="grid-wrapper-header ">
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
              dayX.startOf("day").toString() === item.toString()
                ? "bg-primary text-white"
                : ["6", "7"].includes(item.weekday.toString())
                ? "bg-danger text-white"
                : item.month.toString() === dayX.month.toString()
                ? "bg-secondary text-white"
                : "bg-secondary "
            } `}
          >
            {item.toFormat("d").toString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPage;

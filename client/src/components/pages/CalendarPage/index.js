import React from "react";
import {
  DateTime,
  //  Info
} from "luxon";

const CalendarPage = () => {
  // const value = moment();
  // const startDay = value.clone().startOf('month').startOf('week')
  const startDay = DateTime.local().startOf("month").startOf("week");
  // const endDay = value.clone().endOf("month").endOf("week");
  const endDay = DateTime.local().endOf("month").endOf("week");

  const day = startDay.minus({ day: 1 });
  // const calendar = [];
  const totalDays = 42;
  const calendar = [...Array(totalDays)].map((item, index) => {
    return day.plus({ days: 1 + index });
  });


  // if (day.startOf("day") <= endDay.startOf("day")) {
  //   console.log("If true statement");
  // } else {
  //   console.log("Else false statement");
  // }
  // while (day.startOf("day") <= endDay.startOf("day")) {
  //   console.log("HI");
  //   calendar.push(
  //     Array(7)
  //       .fill(0)
  //       .map(() => {
  //         return day.plus({ days: 1 });
  //       })
  //   );
  // }

  return (
    <div>
      <h3>CalendarPage</h3>
      startDay: {startDay.toString()} - endDay: {endDay.toString()} <br />
      day: {day.toString()}
      <hr />
      <p>{DateTime.now().startOf("month").startOf("week").toLocaleString()}</p>
      <p>{typeof DateTime.now().startOf("month").toLocaleString()}</p>
      {/* <p>{day}</p> */}
      {DateTime.local().toString()}
      {/* {DateTime.local({ zone: "America/New_York" })} */}
      {/* {Info} */}
      <hr />
      {day.toString()}
      <hr />
      {calendar.map((item) => (
        <p>{item.toFormat("d").toString()}</p>
      ))}
      <hr />
      {day.toFormat("dd").toString()}
    </div>
  );
};

export default CalendarPage;

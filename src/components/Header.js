import React from "react";

function getFormattedDate() {
  const time = new Date();
  const year = time.getFullYear();
  const date = time.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[time.getMonth()];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[time.getDay()];
  const formatted = `${dayName}, ${date} ${monthName} ${year}`;
  return formatted;
}

function Header({ todos }) {
  return (
    <div className="Header">
      <p>{getFormattedDate()}</p>
      <p>
        Your todos<div>{todos.length}</div>
      </p>
    </div>
  );
}

export default Header;

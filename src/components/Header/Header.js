import React from "react";
import Badge from "../Badge/Badge";
import { getFormattedDate } from "../../utils/date";

import "./Header.scss";

function Header({ todos }) {
  return (
    <div className="Header">
      <p className="Header__date">{getFormattedDate()}</p>
      <Badge content={todos.length}>
        <p className="Header__text">Your todos</p>
      </Badge>
    </div>
  );
}

export default Header;

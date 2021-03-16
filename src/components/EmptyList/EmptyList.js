import React from "react";
import "./EmptyList.scss";

function EmptyList() {
  return (
    <div className="EmptyList">
      <img
        className="EmptyList__img"
        src="/assets/spaceman.jpg"
        alt="let's go"
        width="200px"
        height="200px"
      />
      <p className="EmptyList__text">It looks like you don't have any todos!</p>
    </div>
  );
}

export default EmptyList;

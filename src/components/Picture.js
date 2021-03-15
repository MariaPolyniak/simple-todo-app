import React from "react";

function Picture() {
  return (
    <div className="Picture">
      <img
        className="Picture__spaceman"
        src="/assets/spaceman.jpg"
        alt="let's go"
      />
      <p className="Picture__text">It looks like you don't have any todos!</p>
    </div>
  );
}

export default Picture;

import React from "react";

function Header() {
  const date = new Date();

  return (
    <div className="Header">
      <p>{date.toLocaleDateString()}</p>
      {/* <p>{todos.length}</p> */}
      <p>Your todos</p>
    </div>
  );
}

export default Header;

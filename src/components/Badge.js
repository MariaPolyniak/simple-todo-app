import React from "react";

function Badge({ content, children }) {
  return content ? (
    <div className="Badge">
      {children}
      <div className="Badge__content">{content}</div>
    </div>
  ) : (
    children
  );
}

export default Badge;

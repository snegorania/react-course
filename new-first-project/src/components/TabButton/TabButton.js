import React from "react";

const TabButton = ({children, isActive, ...props}) => {
  return (
    <li>
      <button className={isActive ? "active": undefined} {...props}>{children}</button>
    </li>
  );
};

export default TabButton;

import React from "react";

const Tabs = ({ children, buttons, Wrapper = 'menu' }) => {
  return (
    <>
      <Wrapper>{buttons}</Wrapper>
      {children}
    </>
  );
};

export default Tabs;

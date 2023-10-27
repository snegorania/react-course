import MainHeader from "./MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;

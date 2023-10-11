import { Fragment } from "react";
import MainHeader from "./MainHeader";
import { useSelector } from "react-redux";
import Notification from "../UI/Notification";

const Layout = (props) => {
  const notification = useSelector((state) => state.ui.notification);
  
  return (
    <Fragment>
      <MainHeader />
      {notification && <Notification
        status={notification.status}
        title={notification.status}
        message={notification.message}
      />}
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

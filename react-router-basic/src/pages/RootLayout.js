import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
import styles from './Root.module.css';

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet/>
      </main>
    </>
  );
};

export default RootLayout;
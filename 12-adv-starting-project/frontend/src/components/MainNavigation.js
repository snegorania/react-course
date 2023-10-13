import classes from "./MainNavigation.module.css";
import { NavLink, Form } from "react-router-dom";
import NewsletterSignup from "./NewsletterSignup";
import { useRouteLoaderData } from "react-router-dom";

function MainNavigation() {
  const token = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : null)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              News Letter
            </NavLink>
          </li>
          {!token && <li>
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Authentication
            </NavLink>
          </li>}
          {token && <li>
            <Form action='/logout' method='post'>
              <button>Log out</button>
            </Form>
          </li>}
        </ul>
        <NewsletterSignup />
      </nav>
    </header>
  );
}

export default MainNavigation;

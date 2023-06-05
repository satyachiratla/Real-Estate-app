import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/auth");
  };

  return (
    <div>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>Real Estate</div>
        </Link>
        <nav>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/auth">Login</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {!isLoggedIn && <main>
        <h1>Welcome to Real Estate</h1>
      </main>}
    </div>
  );
};

export default MainNavigation;

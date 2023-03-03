import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOutRequest } from 'redux/authOperations';
import { selectUserEmail } from 'redux/selectors';
import css from './Layout.module.css';

function Layout() {
  const mail = useSelector(selectUserEmail);
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <>
      <header className={css.section}>
        <nav className={css.layout}>
          <>
            <div className={css.layoutLinksMenu}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? css.active : css.layoutLink
                }
                to="/"
              >
                Home
              </NavLink>
              {token ? (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? css.active : css.layoutLink
                  }
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              ) : (
                ''
              )}
            </div>
            {token ? (
              <div className={css.layoutLinksLogOut}>
                <p className={css.layoutMail}>{mail}</p>
                <NavLink
                  onClick={handleLogOut}
                  className={css.layoutLinkLast}
                  to="/"
                >
                  Logout
                </NavLink>
              </div>
            ) : (
              ''
            )}
          </>
          <>
            {!token ? (
              <div>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? css.active : css.layoutLink
                  }
                  to="/register"
                >
                  Register
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? css.active : css.layoutLinkLast
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </div>
            ) : (
              ''
            )}
          </>
        </nav>
      </header>
      <main className={css.section}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

import Link from 'next/link';

import classes from './main-navigation.module.css';

function MainNavigation() {
  // const [session, loading] = useSession();

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href='/' legacyBehavior>
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
            <li>
              <Link href='/auth'>Login</Link>
            </li>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
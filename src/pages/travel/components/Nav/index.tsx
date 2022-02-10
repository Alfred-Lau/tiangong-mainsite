import React, { FC } from 'react';
import styles from './index.less';

const Nav: FC = () => {
  return (
    <div className={styles.nav}>
      <span>
        <img src="/assets/logo.png" alt="logo" height={40} />
      </span>
      <ul>
        <li>Dest</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
        <li>Login</li>
        <li>SignUp</li>
        <li>EN</li>
      </ul>
    </div>
  );
};

export default Nav;

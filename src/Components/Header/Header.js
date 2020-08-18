import React from "react";
import Logo from "../../assets/images/monkii-logo.png";

import styles from "./header.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="https://www.monkii.com.au/" target="_blank" rel="noreferrer">
        <img src={Logo} alt="logo" />
      </a>
    </header>
  );
};

export default Header;

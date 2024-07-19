import React, { useState } from 'react';
import styles from './Header.module.css';

const CreateButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleClick = () => {
    window.location.href = ''; 
  };

  return (
    <button
      className={styles.createButton}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave} 
      onClick={handleClick} 
    >
      <img
        src={hovered ? "add.png" : "plus.png"} // Conditional src attribute based on hovered state
        alt=""
        className={styles.buttonIcon}
      />
      <span>Créer Rifund</span>
    </button>
  );
};

const getNavLinkHref = (section) => {
  const links = {
    home: '/home',
    contact: '/contact',
    register: '/register',
    login: '/login'
  };
  return links[section] || '';
};

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href={getNavLinkHref('home')} className={styles.logoImage}>
          <img src="rifund.jpg" alt="RIF UND Logo" className={styles.logoImage} />
        </a>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><a href={getNavLinkHref('home')} className={styles.navLink}>HOME</a></li>
          <li><a href={getNavLinkHref('contact')} className={styles.navLink}>CONTACT</a></li>
          <li><a href={getNavLinkHref('register')} className={styles.navLink}>S'INSCRIRE</a></li>
          <li><a href={getNavLinkHref('login')} className={styles.navLink}>SE CONNECTER</a></li>
        </ul>
      </nav>
      <CreateButton />
    </header>
  );
}

export default Header;

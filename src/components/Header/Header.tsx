import React from 'react';
import styles from './Header.module.scss';
import marvelLogo from '../../assets/marvel-logo.svg';
import heartIcon from '../../assets/heart-icon.svg';

const Header: React.FC = () => {
  const handleFavoritesClick = (): void => {
    console.log('Favorites button clicked');
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <img src={marvelLogo} alt="Marvel Logo" />
        </h1>
        
        <button
          type="button"
          onClick={handleFavoritesClick}
          aria-label="Favorites characters"
          className={styles.favoritesButton}
        >
          <img className={styles.favoritesIcon} src={heartIcon} alt="Favorites Icon" />
          <span>0</span>
        </button>
      </div>
    </header>
  );
};

export default Header;

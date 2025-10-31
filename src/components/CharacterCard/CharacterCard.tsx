import type { Character } from '../../types/marvel';
import emptyHeartIcon from '../../assets/empty-heart-icon.svg';

import styles from './CharacterCard.module.scss';

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  return (
    <div className={styles.card}>
      {character.thumbnail && (
        <img
          className={styles.cardImage}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          loading="lazy"
        />
      )}
      <div className={styles.cardDescription}>
        <span>{character.name.toUpperCase()}</span>{' '}
        <span>
          <img
            className={styles.favoritesIcon}
            src={emptyHeartIcon}
            alt="Favorites Icon"
            loading="lazy"
          />
        </span>
      </div>
    </div>
  );
};

export default CharacterCard;

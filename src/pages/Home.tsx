import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api/marvelApi';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import styles from './Home.module.scss';

import type { Character } from '../types/marvel';

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getCharacters();

        setCharacters(data.results || []);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to load characters';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // TODO: implement conmponent loading and error
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={styles.cardList}>
      {characters.map((character) => (
        <li key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};

export default Home;

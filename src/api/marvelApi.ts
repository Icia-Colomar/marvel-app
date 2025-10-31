import type {
  Character,
  Comic,
  MockApiResponse,
  ApiResponse,
} from '../types/marvel';
import { apiMockData } from '../mocks/mockData';

const API_BASE_URL = import.meta.env.VITE_MARVEL_API_BASE_URL;
const API_KEY = import.meta.env.VITE_MARVEL_PUBLIC_API_KEY || '';

const isDevelopmentMode = !API_KEY || API_KEY === '';

export const isApiConfigured = (): boolean => {
  return !!(API_KEY && API_BASE_URL);
};

const buildMarvelApiUrl = (
  endpoint: string,
  additionalParams: Record<string, string> = {}
): URL => {
  const url = new URL(`${API_BASE_URL}${endpoint}`);
  url.searchParams.append('apikey', API_KEY);

  Object.entries(additionalParams).forEach(([key, value]) => {
    if (value) url.searchParams.append(key, value);
  });

  return url;
};

// Fetch characters
export const getCharacters = async (
  limit: number = 50,
  offset: number = 0
): Promise<MockApiResponse<Character>> => {
  if (isDevelopmentMode) {
    return {
      results: apiMockData.characters,
      total: apiMockData.characters.length,
    };
  }

  const url = buildMarvelApiUrl('/characters', {
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Error fetching characters: ${response.statusText}`);
  }

  const data: ApiResponse<Character> = await response.json();
  return {
    results: data.data.results,
    total: data.data.total,
  };
};

// Fetch characters by id
export const getCharacterById = async (
  characterId: string | number
): Promise<MockApiResponse<Character>> => {
  const id =
    typeof characterId === 'string' ? parseInt(characterId) : characterId;

  if (isDevelopmentMode) {
    const character = apiMockData.characters.find((char) => char.id === id);
    return {
      results: character ? [character] : [],
      total: character ? 1 : 0,
    };
  }

  const url = buildMarvelApiUrl(`/characters/${id}`);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Error fetching character ${id}: ${response.statusText}`);
  }

  const data: ApiResponse<Character> = await response.json();

  return {
    results: data.data.results,
    total: data.data.total,
  };
};

// Fetch character comics
export const getCharacterComics = async (
  characterId: string | number,
  limit: number = 20,
  offset: number = 0
): Promise<MockApiResponse<Comic>> => {
  if (isDevelopmentMode) {
    return {
      results: apiMockData.comics,
      total: apiMockData.comics.length,
    };
  }

  const endpoint = characterId
    ? `/characters/${characterId}/comics`
    : '/comics';

  const url = buildMarvelApiUrl(endpoint, {
    limit: limit.toString(),
    offset: offset.toString(),
  });

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(
      `Error fetching character ${characterId} comics: ${response.statusText}`
    );
  }

  const data: ApiResponse<Comic> = await response.json();

  return {
    results: data.data.results,
    total: data.data.total,
  };
};

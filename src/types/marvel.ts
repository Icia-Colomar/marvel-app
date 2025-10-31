// Marvel API Types
export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Character {
  id: number;
  name: string;
  description?: string;
  thumbnail?: Thumbnail;
}

export interface Comic {
  id: number;
  title: string;
  description?: string;
  thumbnail: Thumbnail;
}

// Marvel API response types
export interface ApiResponse<T> {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
}

// Simple response interface for mock data
export interface MockApiResponse<T> {
  results: T[];
  total: number;
}

export interface MockData {
  characters: Character[];
  comics: Comic[];
}

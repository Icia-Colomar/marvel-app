import { http, HttpResponse } from 'msw';
import { apiMockData } from './mockData';

const API_BASE_URL = import.meta.env.VITE_MARVEL_API_BASE_URL;

export const handlers = [
  // GET /characters
  http.get(`${API_BASE_URL}/characters`, ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('nameStartsWith')?.toLowerCase() || '';

    const filtered = apiMockData.characters.filter(
      (char) => !search || char.name.toLowerCase().includes(search)
    );

    return HttpResponse.json({
      code: 200,
      status: 'Ok',
      data: {
        offset: 0,
        limit: 20,
        total: filtered.length,
        count: filtered.length,
        results: filtered,
      },
    });
  }),

  // GET /characters/:id
  http.get(`${API_BASE_URL}/characters/:id`, ({ params }) => {
    const { id } = params;
    const character = apiMockData.characters.find((c) => c.id === Number(id));

    if (!character) {
      return HttpResponse.json(
        { code: 404, message: 'Character not found' },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      data: {
        offset: 0,
        limit: 1,
        total: 1,
        count: 1,
        results: [character],
      },
    });
  }),

  // GET /comics
  http.get(`${API_BASE_URL}/comics`, () => {
    return HttpResponse.json({
      data: {
        offset: 0,
        limit: 20,
        total: apiMockData.comics.length,
        count: apiMockData.comics.length,
        results: apiMockData.comics,
      },
    });
  }),
];

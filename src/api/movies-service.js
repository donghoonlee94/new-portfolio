import { api } from './index';

export function getMovies() {
  return api.get('movies');
}
import { api } from './index';

export function getSkils() {
  return api.get('skils');
}
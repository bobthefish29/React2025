import { useFetch } from '../useFetch';

export const useFetchProduct = (productId: number) => {
  return useFetch(`/products/${productId}`);
};

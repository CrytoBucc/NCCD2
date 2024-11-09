import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { endpoints } from '../lib/api';
import type { Product } from '../types';

export function useProducts() {
  const queryClient = useQueryClient();

  const products = useQuery({
    queryKey: ['products'],
    queryFn: () => endpoints.products.getAll().then((res) => res.data),
  });

  const createProduct = useMutation({
    mutationFn: (data: Partial<Product>) => endpoints.products.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const updateProduct = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Product> }) =>
      endpoints.products.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (id: string) => endpoints.products.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return {
    products,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
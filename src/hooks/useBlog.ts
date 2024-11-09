import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { endpoints } from '../lib/api';
import type { BlogPost } from '../types';

export function useBlog() {
  const queryClient = useQueryClient();

  const posts = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => endpoints.blog.getPosts().then((res) => res.data),
  });

  const createPost = useMutation({
    mutationFn: (data: Partial<BlogPost>) => endpoints.blog.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });

  const updatePost = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<BlogPost> }) =>
      endpoints.blog.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });

  const deletePost = useMutation({
    mutationFn: (id: string) => endpoints.blog.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    },
  });

  return {
    posts,
    createPost,
    updatePost,
    deletePost,
  };
}
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { endpoints } from '../lib/api';
import type { Event } from '../types';

export function useEvents() {
  const queryClient = useQueryClient();

  const events = useQuery({
    queryKey: ['events'],
    queryFn: () => endpoints.events.getAll().then((res) => res.data),
  });

  const createEvent = useMutation({
    mutationFn: (data: Partial<Event>) => endpoints.events.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  const updateEvent = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Event> }) =>
      endpoints.events.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  const deleteEvent = useMutation({
    mutationFn: (id: string) => endpoints.events.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  return {
    events,
    createEvent,
    updateEvent,
    deleteEvent,
  };
}
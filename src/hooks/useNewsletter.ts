import { useMutation } from '@tanstack/react-query';
import { endpoints } from '../lib/api';

export function useNewsletter() {
  const subscribe = useMutation({
    mutationFn: ({ email, preferences }: { email: string; preferences?: any }) =>
      endpoints.newsletter.subscribe(email, preferences),
  });

  const unsubscribe = useMutation({
    mutationFn: (email: string) => endpoints.newsletter.unsubscribe(email),
  });

  const updatePreferences = useMutation({
    mutationFn: ({ email, preferences }: { email: string; preferences: any }) =>
      endpoints.newsletter.updatePreferences(email, preferences),
  });

  return {
    subscribe,
    unsubscribe,
    updatePreferences,
  };
}
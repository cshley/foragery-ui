import { useQuery } from '@tanstack/react-query';
import { fetchMockCardData } from './mockCardDataApi.ts';

export const useFetchMockCardData = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['cards'],
        queryFn: fetchMockCardData,
        staleTime: 1000 * 60 * 5,
        retry: 2,
    });

    return { data, isLoading, error };
};

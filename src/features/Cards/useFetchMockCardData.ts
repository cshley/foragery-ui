import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { fetchMockCardData } from './mockCardDataApi.ts';
import { setCards } from './cardSlice.ts';

import { AppDispatch } from '../../store/store.ts';

// Custom hook fetching "api data"
export const useFetchMockCardData = () => {
    const dispatch = useDispatch<AppDispatch>();

    return useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const data = await fetchMockCardData();
            dispatch(setCards(data));
            return data;
        },
    });
};

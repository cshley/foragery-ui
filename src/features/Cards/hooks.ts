import { useQuery } from '@tanstack/react-query'
// import { useZustandStore } from '../../stores/zustandStore.ts'

import { fetchMockCardData } from './mockCardDataApi.ts'
import { setCards } from './cardSlice.ts'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../stores/store.ts'

export const useFetchMockCardData = () => {
    // const { setPlantData } = useZustandStore()
    const dispatch = useDispatch<AppDispatch>()

    return useQuery({
        queryKey: ['cards'],
        queryFn: async () => {
            const data = await fetchMockCardData()
            // setPlantData(data)
            dispatch(setCards(data))
            return data
        },
    })
}

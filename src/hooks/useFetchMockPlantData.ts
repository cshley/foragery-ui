import { useQuery } from '@tanstack/react-query'
import { usePlantStore } from '../stores/plantStore'
import { fetchMockPlantData } from '../apis/mockPlantApi'

export const useFetchMockPlantData = () => {
    const { setPlantData } = usePlantStore()

    return useQuery({
        queryKey: ['plants'],
        queryFn: async () => {
            const data = await fetchMockPlantData()
            setPlantData(data)
            return data
        },
    })
}

import { CardData } from '../types/CardData.ts'

const mockCardList: CardData[] = [
    {
        id: '1',
        title: 'Licorice',
        description: 'Root is used to soothe sore throats and treat ulcers.',
    },
    {
        id: '2',
        title: 'Basil',
        description:
            'Culinary herb; has anti-inflammatory and antibacterial properties.',
    },
    {
        id: '3',
        title: 'Stinging Nettle',
        description:
            'Cooked leaves are edible; used traditionally to treat arthritis and anemia.',
    },
    {
        id: '4',
        title: 'Lemon Balm',
        description:
            'Leaves are used to reduce stress and anxiety; also aids digestion.',
    },
]

export const fetchMockPlantData = (): Promise<CardData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCardList)
        }, 2000)
    })
}

import { create } from 'zustand'
import { CardData } from '../types/CardData.ts'

type StoreState = {
    cardList: CardData[]
    filteredCardList: CardData[]
    searchQuery: string
    setSearchQuery: (query: string) => void
    filterCards: () => void
}
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
            'Culinary herb; has anti-inflammatory and antibacterial properties."',
    },
    {
        id: '3',
        title: 'Stinging Nettle',
        description:
            'Cooked leaves are edible; used traditionally to treat arthritis and anemia.',
    },
]
export const usePlantStore = create<StoreState>((set, get) => ({
    cardList: mockCardList,
    filteredCardList: mockCardList,
    searchQuery: '',
    // TODO: Logic into separate function?
    setSearchQuery: (query: string) => {
        set({ searchQuery: query })
        get().filterCards()
    },
    // TODO: Logic into separate function?
    filterCards: () => {
        const { cardList, searchQuery } = get()
        if (!searchQuery) {
            set({ filteredCardList: cardList })
        } else {
            set({
                filteredCardList: cardList.filter(
                    (card: CardData) =>
                        card.title
                            ?.toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                        card.description
                            ?.toLowerCase()
                            .includes(searchQuery.toLowerCase())
                ),
            })
        }
    },
}))

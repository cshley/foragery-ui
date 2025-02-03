import { CardData } from './CardData.ts'

export type PlantStoreState = {
    cardList: CardData[]
    filteredCardList: CardData[]
    searchQuery: string
    setSearchQuery: (query: string) => void
    setPlantData: (cardData: CardData[]) => void
    filterCards: () => void
}

import { create } from 'zustand'

import { cardListToFilteredCardListMap } from '../utils/cardListToFilteredCardListMap.ts'

import { CardData } from '../types/CardData.ts'
import { PlantStoreState } from '../types/PlantStoreState.ts'

export const usePlantStore = create<PlantStoreState>((set) => ({
    cardList: [],
    filteredCardList: [],
    searchQuery: '',
    setPlantData: (cardData: CardData[]) => {
        set(() => ({ cardList: cardData, filteredCardList: cardData }))
    },
    setSearchQuery: (query: string) => {
        set((state) => {
            const filteredCards = cardListToFilteredCardListMap(
                state.cardList,
                query
            )
            return { searchQuery: query, filteredCardList: filteredCards }
        })
    },
    filterCards: () => {
        set((state) => ({
            filteredCardList: cardListToFilteredCardListMap(
                state.cardList,
                state.searchQuery
            ),
        }))
    },
}))

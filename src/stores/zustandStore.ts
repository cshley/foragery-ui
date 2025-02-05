// NOTE: Experiment with Zustand state management for learning purposes

// import { create } from 'zustand'
//
// import { cardListToFilteredCardListMap } from '../utils/cardListToFilteredCardListMap.ts'
// import { CardData } from '../features/Cards/CardTypes.ts'
//
// export type ZustandStoreState = {
//     cardList: CardData[]
//     filteredCardList: CardData[]
//     searchQuery: string
//     setSearchQuery: (query: string) => void
//     setPlantData: (cardData: CardData[]) => void
//     filterCards: () => void
// }
//
// export const useZustandStore = create<ZustandStoreState>((set) => ({
//     cardList: [],
//     filteredCardList: [],
//     searchQuery: '',
//     setPlantData: (cardData: CardData[]) => {
//         set(() => ({ cardList: cardData, filteredCardList: cardData }))
//     },
//     setSearchQuery: (query: string) => {
//         set((state) => {
//             const filteredCards = cardListToFilteredCardListMap(
//                 state.cardList,
//                 query
//             )
//             return { searchQuery: query, filteredCardList: filteredCards }
//         })
//     },
//     filterCards: () => {
//         set((state) => ({
//             filteredCardList: cardListToFilteredCardListMap(
//                 state.cardList,
//                 state.searchQuery
//             ),
//         }))
//     },
// }))

import { createSelector } from '@reduxjs/toolkit'

import { cardListToFilteredCardListMap } from '../../utils/cardListToFilteredCardListMap.ts'

import { RootState } from '../../stores/store.ts'
import { CardData } from './CardTypes.ts'

export const selectSearchQuery = (state: RootState): string => state.cards.searchQuery
export const selectCards = (state: RootState): CardData[] => state.cards.cards

export const selectFilteredCards = createSelector(
    [selectCards, selectSearchQuery],
    (cards, searchQuery) => cardListToFilteredCardListMap(cards, searchQuery)
)

import { createSelector } from '@reduxjs/toolkit'

import { cardListToFilteredCardListMap } from '../../utils/cardListToFilteredCardListMap.ts'

import { RootState } from '../../stores/store.ts'

export const selectSearchQuery = (state: RootState) => state.cards.searchQuery
export const selectCards = (state: RootState) => state.cards.cards

export const selectFilteredCards = createSelector(
    [selectCards, selectSearchQuery],
    (cards, searchQuery) => cardListToFilteredCardListMap(cards, searchQuery)
)

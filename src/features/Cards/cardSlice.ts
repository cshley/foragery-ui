import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardData } from './CardTypes.ts';

export type CardsState = {
    cards: CardData[];
    searchQuery: string;
};

const initialState: CardsState = {
    cards: [],
    searchQuery: '',
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setCards: (state, action: PayloadAction<CardData[]>) => {
            state.cards = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
    },
});

export const { setCards, setSearchQuery } = cardsSlice.actions;
export default cardsSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';

import cardsReducer from '../features/Cards/cardSlice.ts';

export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../components/ui/Header.tsx';
import { SearchBar } from '../features/SearchBar/SearchBar.tsx';
import { CardList } from '../features/Cards/CardList.tsx';
import { Footer } from '../components/ui/Footer.tsx';
import { useFetchMockCardData } from '../features/Cards/useFetchMockCardData.ts';
import {
    selectFilteredCards,
    selectSearchQuery,
} from '../features/Cards/filteredCardsSelector.ts';
import { useVersion } from '../features/Version/useVersion.ts';
import { setSearchQuery } from '../features/Cards/cardSlice.ts';

import { AppDispatch } from '../store/store.ts';
import { CardData } from '../features/Cards/CardTypes.ts';

export const MainContainer: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const filteredCards: CardData[] = useSelector(selectFilteredCards);
    const searchQuery: string = useSelector(selectSearchQuery);

    const { isLoading } = useFetchMockCardData();
    const version: string = useVersion();

    return (
        <div className="flex flex-col min-h-screen w-1/2 mx-auto">
            <Header
                title="foragery"
                description="Your Trusted Companion for Edible Plants."
                titleClassName="text-5xl font-bold leading-relaxed"
                descriptionClassName="text-lg leading-relaxed"
            />
            <main className={'flex-grow'}>
                <SearchBar
                    searchQuery={searchQuery}
                    onUserInput={(value: string) =>
                        dispatch(setSearchQuery(value))
                    }
                />
                {isLoading ? (
                    <p className="text-center p-4">Loading plants...</p>
                ) : (
                    <CardList cards={filteredCards} />
                )}
            </main>
            <Footer version={version} />
        </div>
    );
};

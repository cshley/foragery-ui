import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import { useZustandStore } from '../stores/zustandStore.ts'

import { Header } from '../components/ui/Header.tsx'
import { SearchBar } from '../components/ui/SearchBar.tsx'
import { CardList } from '../features/Cards/CardList.tsx'
import { useFetchMockCardData } from '../features/Cards/hooks.ts'
import {
    selectFilteredCards,
    selectSearchQuery,
} from '../features/Cards/filteredCardsSelector.ts'

import { AppDispatch } from '../stores/store.ts'
import { CardData } from '../features/Cards/CardTypes.ts'
import { setSearchQuery } from '../features/Cards/cardSlice.ts'

export const MainContainer: React.FC = () => {
    // const { filteredCardList, searchQuery, setSearchQuery } = useZustandStore()
    const dispatch = useDispatch<AppDispatch>()

    const filteredCards: CardData[] = useSelector(selectFilteredCards)
    const searchQuery: string = useSelector(selectSearchQuery)

    const { isLoading } = useFetchMockCardData()

    return (
        <div className="container mx-auto w-1/2">
            <Header
                title="foragery"
                description="Your Trusted Companion for Edible Plants."
                titleClassName="text-5xl font-bold leading-relaxed"
                descriptionClassName="text-lg leading-relaxed"
            />
            <SearchBar
                searchQuery={searchQuery}
                labelClassName="m-2"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setSearchQuery(event.target.value))
                }
            />
            {isLoading ? (
                <p className="text-center p-4">Loading plants...</p>
            ) : (
                <CardList cards={filteredCards} />
            )}
        </div>
    )
}

import React from 'react'

import { Header } from '../components/Header.tsx'
import { SearchBar } from '../components/SearchBar.tsx'
import { CardList } from '../components/CardList.tsx'

import { usePlantStore } from '../stores/usePlantStore.ts'

export const MainContainer: React.FC = () => {
    const { filteredCardList, searchQuery, setSearchQuery } = usePlantStore()
    return (
        <div className="container mx-auto w-1/2">
            <Header
                title="foragery"
                description="Your Trusted Companion for Edible Plants."
                titleClassName="text-5xl font-bold leading-relaxed text-deep-green"
                descriptionClassName="text-lg leading-relaxed text-deep-green"
            />
            <SearchBar
                searchQuery={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                }
            />
            <CardList cards={filteredCardList} />
        </div>
    )
}

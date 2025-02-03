import React from 'react'

import { Header } from '../components/Header.tsx'
import { SearchBar } from '../components/SearchBar.tsx'
import { CardList } from '../components/CardList.tsx'

import { usePlantStore } from '../stores/plantStore.ts'
import { useFetchMockPlantData } from '../hooks/useFetchMockPlantData.ts'

export const MainContainer: React.FC = () => {
    const { filteredCardList, searchQuery, setSearchQuery } = usePlantStore()
    const { isLoading } = useFetchMockPlantData()

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
                    setSearchQuery(event.target.value)
                }
            />
            {isLoading ? (
                <p className="text-center p-4">Loading plants...</p>
            ) : (
                <CardList cards={filteredCardList} />
            )}
        </div>
    )
}

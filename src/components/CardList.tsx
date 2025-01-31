import React from 'react'
import { Card } from './Card.tsx'
import { CardData } from '../types/CardData.ts'

type CardListProps = {
    cards: CardData[]
    layout?: 'grid' | 'list'
}

export const CardList: React.FC<CardListProps> = ({
    cards,
    layout = 'grid',
}) => {
    const containerClass =
        layout === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'flex flex-col space-y-4'

    return (
        <div className={containerClass}>
            {cards.map((card: CardData) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                />
            ))}
        </div>
    )
}

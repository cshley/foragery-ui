import React from 'react';

import { Card } from './Card.tsx';
import { NoResultsMessage } from '../../components/ui/NoResultsMessage.tsx';

import { CardData, CardListProps } from './CardTypes.ts';

export const CardList: React.FC<CardListProps> = ({
    cards,
    layout = 'grid',
}) => {
    const containerClassName =
        layout === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4'
            : 'flex flex-col space-y-4 py-4';

    return cards.length === 0 ? (
        <NoResultsMessage message={'No plants found.'} />
    ) : (
        <div className={containerClassName}>
            {cards.map((card: CardData) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    cardClassName="border-2 border-black"
                />
            ))}
        </div>
    );
};

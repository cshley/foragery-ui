export type CardData = {
    id?: string
    title?: string
    description?: string
}

export type CardListProps = {
    cards: CardData[]
    layout?: 'grid' | 'list'
}

export type CardProps = {
    title?: string
    description?: string
    cardClassName?: string
    titleClassName?: string
    descriptionClassName?: string
}
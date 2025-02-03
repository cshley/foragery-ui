import { CardData } from '../types/CardData.ts'

export const cardListToFilteredCardListMap = (
    cardList: CardData[],
    searchQuery: string
): CardData[] => {
    if (!searchQuery) {
        return cardList
    } else {
        return cardList.filter(
            (card: CardData) =>
                card.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                card.description
                    ?.toLowerCase()
                    .includes(searchQuery.toLowerCase())
        )
    }
}

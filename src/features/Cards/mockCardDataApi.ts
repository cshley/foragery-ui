import { CardData } from './CardTypes.ts';

const mockCardList: CardData[] = [
    {
        id: '1',
        title: 'Lemon Balm',
        description:
            'Leaves are used to reduce stress and anxiety; also aids digestion.',
    },
    {
        id: '2',
        title: 'Garlic',
        description: 'Used to lower blood cholesterol and high blood pressure.',
    },
    {
        id: '3',
        title: 'Aloe Vera',
        description:
            'Leaves are widely used to heal burns, wounds, and other skin ailments.',
    },
    {
        id: '4',
        title: 'Chamomile',
        description:
            'Flowers are used to make tea that aids digestion and promotes sleep.',
    },
    {
        id: '5',
        title: 'Ginger',
        description:
            'Rhizome is used as a spice and to treat nausea and inflammation.',
    },
    {
        id: '6',
        title: 'Peppermint',
        description:
            'Leaves are used to make tea for digestive issues and to relieve headaches.',
    },
    {
        id: '7',
        title: 'Elderberry',
        description:
            'Berries are used to boost the immune system and treat colds and flu.',
    },
    {
        id: '8',
        title: 'Turmeric',
        description:
            'Spice used in cooking; has anti-inflammatory and antioxidant properties.',
    },
    {
        id: '9',
        title: 'Lavender',
        description:
            'Flowers are used for their calming effects and to treat anxiety and insomnia.',
    },
    {
        id: '10',
        title: 'Rosemary',
        description:
            'Used as a culinary herb; traditionally used to improve memory and digestion.',
    },
    {
        id: '11',
        title: 'Dandelion',
        description:
            'Young leaves are edible in salads; roots and leaves have been used traditionally for liver and digestive disorders.',
    },
    {
        id: '12',
        title: 'Sage',
        description:
            'Used in cooking; traditionally used to improve digestion and reduce inflammation.',
    },
    {
        id: '13',
        title: 'Licorice',
        description: 'Root is used to soothe sore throats and treat ulcers.',
    },
    {
        id: '14',
        title: 'Basil',
        description:
            'Culinary herb; has anti-inflammatory and antibacterial properties.',
    },
    {
        id: '15',
        title: 'Stinging Nettle',
        description:
            'Cooked leaves are edible; used traditionally to treat arthritis and anemia.',
    },
];

export const fetchMockCardData = (): Promise<CardData[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockCardList);
        }, 2000);
    });
};

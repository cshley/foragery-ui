import React from 'react'
import { twMerge } from 'tailwind-merge'

import { CardProps } from './CardTypes.ts'

export const Card: React.FC<CardProps> = ({
    title,
    description,
    cardClassName = '',
    titleClassName = '',
    descriptionClassName = '',
}: CardProps) => {
    return (
        <div
            className={twMerge(
                `rounded-2xl p-4 max-w-sm border`,
                cardClassName
            )}
        >
            <h2 className={twMerge('text-xl font-semibold', titleClassName)}>
                {title}
            </h2>
            <p className={twMerge('mt-2', descriptionClassName)}>
                {description}
            </p>
        </div>
    )
}

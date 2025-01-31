import React from 'react'
import { twMerge } from 'tailwind-merge'

type HeaderProps = {
    title: string
    description?: string
    className?: string
    titleClassName?: string
    descriptionClassName?: string
}

export const Header: React.FC<HeaderProps> = ({
    title,
    description,
    className = '',
    titleClassName = '',
    descriptionClassName = '',
}) => {
    return (
        <header
            className={twMerge('header', className)}
            aria-labelledby="site-title site-description"
        >
            <h1 className={titleClassName} id="site-title">
                {title}
            </h1>
            {description && (
                <p className={descriptionClassName} id="site-description">
                    {description}
                </p>
            )}
        </header>
    )
}

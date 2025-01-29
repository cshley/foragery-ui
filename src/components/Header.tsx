import React from 'react'

type HeaderProps = {
    title: string
    description?: string
    className?: string
}

export const Header: React.FC<HeaderProps> = ({
    title,
    description,
    className = "",
}) => {
    return (
        <header
            className={`header ${className ? className : ''}`}
            aria-labelledby="site-title site-description"
        >
            <h1 id="site-title">{title}</h1>
            {description && <p id="site-description">{description}</p>}
        </header>
    )
}

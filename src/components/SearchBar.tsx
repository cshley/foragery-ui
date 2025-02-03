import React from 'react'
import { twMerge } from 'tailwind-merge'

type SearchBarProps = {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
    ariaLabel?: string
    placeholder?: string
    labelClassName?: string
    inputClassName?: string
    searchQuery?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
    onChange,
    placeholder = 'Search Plants...',
    inputClassName = '',
    ariaLabel = 'search',
    searchQuery = '',
}: SearchBarProps) => {
    return (
        <div className="p-1">
            <label htmlFor={ariaLabel} className="sr-only">
                Search for a plant
            </label>
            <input
                id={ariaLabel}
                type="text"
                role="searchbox"
                value={searchQuery}
                className={twMerge(
                    inputClassName,
                    'p-1 border-2 border-black focus:outline-none'
                )}
                onChange={onChange}
                placeholder={placeholder}
            ></input>
        </div>
    )
}

import React from 'react'

type SearchBarProps = {
    ariaLabel?: string
    placeholder?: string
    labelClassName?: string
    inputClassName?: string
    onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void
    searchQuery?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
    placeholder = 'Search...',
    labelClassName = '',
    inputClassName = '',
    onChange,
    ariaLabel = 'Search',
    searchQuery = '',
}: SearchBarProps) => {
    return (
        <>
            <label className={labelClassName} htmlFor={ariaLabel}>
                <input
                    value={searchQuery}
                    className={inputClassName}
                    onChange={onChange}
                    placeholder={placeholder}
                ></input>
            </label>
        </>
    )
}

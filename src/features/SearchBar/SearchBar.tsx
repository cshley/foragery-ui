import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useDebouncedValue as useDebouncedValueHook } from './useDebouncedValue.ts';

import { SearchBarProps } from './SearchBarTypes.ts';

export const SearchBar: React.FC<SearchBarProps> = ({
    onUserInput,
    useDebouncedValue = useDebouncedValueHook,
    placeholder = 'Search Plants...',
    inputClassName = '',
    searchQuery = '',
}: SearchBarProps) => {
    const [query, setQuery] = useState(searchQuery);

    const debouncedQuery: string = useDebouncedValue(query);

    useEffect(() => {
        // Prevents firing on mount
        if (debouncedQuery !== searchQuery) {
            // Dispatch debounced user input string to redux store
            onUserInput(debouncedQuery);
        }
    }, [debouncedQuery, onUserInput, searchQuery]);

    return (
        <div className="p-1" data-testid="search-bar">
            <label
                htmlFor="search"
                className="sr-only m2"
                data-testid="search-bar-label"
            >
                Search for a plant
            </label>
            <input
                id="search"
                type="text"
                value={query}
                className={twMerge(
                    inputClassName,
                    'p-1 border-2 border-black focus:outline-none'
                )}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholder}
                aria-labelledby="search-bar-label"
                data-testid="search-bar-input"
            ></input>
        </div>
    );
};

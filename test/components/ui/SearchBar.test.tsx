import { render, screen } from '@testing-library/react'
import { fireEvent, act } from '@testing-library/react'
import { axe } from 'vitest-axe'
import { describe, it, expect, vi } from 'vitest'

import { SearchBar } from '../../../src/features/SearchBar/SearchBar.tsx'

describe('SearchBar', () => {
    const handleChange = vi.fn()

    afterEach(() => {
        vi.restoreAllMocks()
    })
    const inputClassName = 'testInputClassName'

    it('renders the SearchBar', () => {
        render(
            <SearchBar
                onUserInput={handleChange}
                inputClassName={'testInputClassName'}
            />
        )
        const element: HTMLElement = screen.getByTestId('search-bar')

        expect(element).toBeInTheDocument()
        expect(element.className).toEqual(`p-1`)
    })

    it('renders the SearchBar label', () => {
        render(
            <SearchBar
                onUserInput={handleChange}
                inputClassName={'testInputClassName'}
            />
        )
        const element: HTMLElement = screen.getByTestId('search-bar-label')

        expect(element).toBeInTheDocument()
        expect(element.className).toEqual(`sr-only m2`)
        expect(element).toHaveTextContent(`Search for a plant`)
    })

    it('renders the SearchBar input', () => {
        render(
            <SearchBar
                onUserInput={handleChange}
                inputClassName={'testInputClassName'}
            />
        )
        const element: HTMLElement = screen.getByTestId('search-bar-input')

        expect(element).toBeInTheDocument()
        expect(element.className).toEqual(
            `${inputClassName} p-1 border-2 border-black focus:outline-none`
        )
        expect(element.id).toEqual(`search`)
    })

    it('utilises debouncing for onUserInput', async () => {
        vi.useFakeTimers()

        render(<SearchBar onUserInput={handleChange} />)

        const element: HTMLElement = screen.getByTestId('search-bar-input')

        // User input
        await act(async () => {
            fireEvent.change(element, { target: { value: 't' } })
            fireEvent.change(element, { target: { value: 'th' } })
            fireEvent.change(element, { target: { value: 'thyme' } })

            const defaultDebounceDelayMs = 300
            vi.advanceTimersByTime(defaultDebounceDelayMs)
        })

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenCalledWith('thyme')

        vi.useRealTimers()
    })

    it('SearchBar component should have no accessibility violations', async () => {
        const { container } = render(<SearchBar onUserInput={handleChange} />)
        const results = await axe(container)
        expect(results.violations).toEqual([])
    })
})

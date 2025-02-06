import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'vitest-axe'
import { describe, it, expect, vi } from 'vitest'

import { SearchBar } from '../../../src/components/ui/SearchBar'

describe('SearchBar', () => {
    const handleChange = vi.fn()

    it('renders the SearchBar', () => {
        render(<SearchBar onChange={handleChange} inputClassName={"testInputClassName"} />)
        const element: HTMLElement = screen.getByRole('searchbox', {
            name: 'Search for a plant',
        })
        expect(element).toBeInTheDocument()
        expect(element.className).toEqual("testInputClassName p-1 border-2 border-black focus:outline-none");
    })

    it('calls onChange handler when user types', async () => {
        render(<SearchBar onChange={handleChange} />)
        const input: string = 'Thyme'

        await userEvent.type(
            screen.getByRole('searchbox', { name: 'Search for a plant' }),
            input
        )
        expect(handleChange).toHaveBeenCalledTimes(input.length)
    })

    it('SearchBar component should have no accessibility violations', async () => {
        const { container } = render(<SearchBar onChange={handleChange} />)
        const results = await axe(container)
        expect(results.violations).toEqual([])
    })
})

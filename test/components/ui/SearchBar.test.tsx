import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchBar } from '../../../src/components/ui/SearchBar'
import { describe } from 'vitest'


describe('SearchBar', () => {
    const handleChange = vi.fn()

    it('renders the SearchBar', () => {
        render(<SearchBar onChange={handleChange} />)
        expect(screen.getByRole('searchbox', { name: 'Search for a plant' })).toBeInTheDocument()
    })

    it('calls onChange handler when user types', async () => {
        render(<SearchBar onChange={handleChange} />)
        const input: string = "Thyme"

        await userEvent.type(screen.getByRole('searchbox', { name: 'Search for a plant' }), input)
        expect(handleChange).toHaveBeenCalledTimes(input.length)
    })
})
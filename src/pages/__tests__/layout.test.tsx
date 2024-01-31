import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SearchBar from '../../components/searchBar/Index'

describe('SearchBar component', () => {
  it('renders SearchBar with placeholder text', () => {

    const { getByPlaceholderText, getByAltText } = render(
      <MemoryRouter>
        <SearchBar searchInput="" handleChange={() => { }} handleSubmit={() => { }} />
      </MemoryRouter>
    )

    const inputElement = getByPlaceholderText('Nunca dejes de buscar')
    fireEvent.change(inputElement, { target: { value: 'New Value' } })

    const buttonElement = getByAltText('buscar butón Mercado Libre')
    fireEvent.click(buttonElement)

  })
})
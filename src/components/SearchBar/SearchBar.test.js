import React from 'react'
import { SearchBar } from './SearchBar'
import { render, screen, fireEvent, getAllByRole } from '@testing-library/react'
import { renderWithRedux } from '../../util/testHelpers'


describe('<Searchbar> tests', () => {

  test('<Searchbar> runs without crashing ', () => {
    renderWithRedux(<SearchBar />)
  })
  test('should have name as the default dropdown option', () => {
    const { getByTestId } =  renderWithRedux(<SearchBar />)
    const dropdown = getByTestId('search-criteria')
    //console.log(dropdown.children[0].text)
    const display = dropdown.children[0];

    expect(display.textContent).toBe('Name');   
  })

  test.skip('should change to Alcohol/Spirit', () => {
    const { getByTestId, getByText } =  renderWithRedux(<SearchBar />)
    const dropdown = getByTestId('search-criteria')
   
    const display = dropdown.children[0];

    fireEvent.click(dropdown);
    //screen.debug(screen.getByTestId('search-criteria'))

    const dropdownOptions = getAllByRole(dropdown, 'option');
    console.log(dropdownOptions[2].text)

    //fireEvent.click(dropdownOptions[2]);
    fireEvent.click(getByText('Alcohol/Spirit'));
    expect(display.textContent).toBe('Alcohol/Spirit');

    console.log(display.textContent);

    
  }) 
})

// TEST TODO:
// clicking criteria opens dropdown
// clicking dropdown option runs function once
// clicking dropdown option sets store value to right thing

// renders search
// writing in search changes state

// renders search button
// button click calls function once
// clicking after writing in search and picking criteria gives given value in store
// if empty, dont run anything

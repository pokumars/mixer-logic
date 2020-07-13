import React from 'react'
import { SearchBar } from './SearchBar'
import { render, screen } from '@testing-library/react'
import { renderWithWrapper } from '../../setupTests'
import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers'

expect.extend({ toHaveDisplayValue })

describe('<Searchbar> tests', () => {
  let component

  beforeEach(() => {
    component = renderWithWrapper(<SearchBar />)
  })

  test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
  })
})

//
// clicking criteria opens dropdown
// clicking dropdown option runs function once
// clicking dropdown option sets store value to right thing

// renders search
// writing in search changes state

// renders search button
// button click calls function once
// clicking after writing in search and picking criteria gives given value in store
// if empty, dont run anything

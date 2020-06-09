import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { fireEvent } from "@testing-library/dom";
import { toHaveStyle } from '@testing-library/jest-dom'



describe('<Button /> Tests', () => {
  let component;
  
  beforeEach(()=> {
    component = render(
      <Button btnText="Sign In" btnColor="blue"
        handleClick={()=> console.log('----------------------')}/>
    );
  });

  it('should have the given color', () => {
    const btn = component.container.querySelector('button')
    expect(btn).toHaveStyle('background-color: blue')
  })

  test(' button should have the corrct text', () => {
    const btn = component.container.querySelector('button')
    expect(btn).toHaveTextContent('Sign In')
  })
})

//calls function once when clicked

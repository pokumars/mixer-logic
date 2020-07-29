//This component barely needs any tests. i am only testing it for rehearsal sake
import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Contact from './Contact'
const expectedLinkedIn = "https://www.linkedin.com/in/oheneba-poku-marboah-483783173/"
const expectedGithub = "https://github.com/pokumars"
const expectedCVLink = "cv_oheneba_pokumarboah.pdf"

afterEach(cleanup)
 
it('should take a snapshot', () => {
    const { asFragment } = render(<Contact />)
    
    expect(asFragment(<Contact />)).toMatchSnapshot()
});
describe('main Contact.js tests', () => {
    let contactComponent
    beforeEach(() => {
        contactComponent = render (<Contact />)
    })
    
    test('should have correct github href', () => {
        const githubLink = contactComponent.getByText('GitHub')

        expect(githubLink.closest('a')).toHaveAttribute('href', expectedGithub)
        expect(githubLink.closest('a')).toBeDefined()
    })

    test('should have correct LinkedIn href', () => {
        const linkedinLink = contactComponent.getByText('LinkedIn')

        expect(linkedinLink.closest('a')).toBeDefined()
        expect(linkedinLink.closest('a')).toHaveAttribute('href', expectedLinkedIn)
    })

    test('should have my cv that opens in a new tab', () => {
        const cvLink = contactComponent.getByText('curriculum vitae')

        expect(cvLink.closest('a')).toBeDefined()
        expect(cvLink.closest('a')).toHaveAttribute('href', expectedCVLink)
        expect(cvLink.closest('a')).toHaveAttribute('target', '_blank')
    })
})


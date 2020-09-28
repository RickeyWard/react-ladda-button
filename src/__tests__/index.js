import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import LaddaButton, { EXPAND_LEFT } from '..'

describe('<LaddaButton />', () => {
  test("label text rendered from children prop", ()=>{
    const testtext = 'test button'
    const { getByText } = render(
      <LaddaButton data-style={EXPAND_LEFT}>{testtext}</LaddaButton>
    )
    expect(getByText(testtext)).toHaveTextContent(testtext)
    cleanup()
  })
})

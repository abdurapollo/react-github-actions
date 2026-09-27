/** @vitest-environment jsdom */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'Code with techAbd' }),
    ).toBeInTheDocument()
  })

  it('renders the project heading', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'React Github Actions',
      }),
    ).toBeInTheDocument()
  })
})
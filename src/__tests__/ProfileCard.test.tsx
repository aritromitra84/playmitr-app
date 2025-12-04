import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React from 'react'

function ProfileCard({ name = 'Ari' }) {
  return (
    <div data-testid="profile-card">
      <h2>{name}</h2>
      <button>Follow</button>
    </div>
  )
}

describe('ProfileCard', () => {
  it('renders the name and a follow button', () => {
    render(<ProfileCard name="Aritro" />)
    expect(screen.getByText('Aritro')).toBeDefined()
    expect(screen.getByRole('button', { name: /follow/i })).toBeDefined()
    expect(screen.getByTestId('profile-card')).toBeInTheDocument()
  })
})

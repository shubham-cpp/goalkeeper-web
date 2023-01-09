import { render } from '@testing-library/react'
import App from './App'

describe('<App />', (): void => {
  it('should render App', (): void => {
    const { getByText } = render(<App />)

    expect(getByText(/Vite \+ React/i)).toBeInTheDocument()
    expect(getByText(/Click on the Vite and React logos to learn more/)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import FilterBar from '../components/FilterBar'

test('renders filter selects', () => {
  render(<FilterBar filter={{status:'All',category:'All'}} setFilter={()=>{}} categories={['General']} />)
  expect(screen.getByRole('combobox')).toBeInTheDocument()
})

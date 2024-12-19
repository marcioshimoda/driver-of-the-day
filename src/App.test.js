import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders driver input', () => {
  render(<App />);
  const inputLabel = screen.getByText(/Qual é o piloto do dia?/i);
  const inputElement = screen.getByLabelText(/Qual é o piloto do dia?/i);
  expect(inputLabel).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('renders driver input and filters driver list by input value', () => {
  render(<App />);
  
  const driverInput = screen.getByLabelText(/Qual é o piloto do dia?/i);
  fireEvent.change(driverInput, { target: { value: 'Hamilton' } });
  
  const driverList = screen.getByTestId('driver-list');
  const filteredDrivers = driverList.querySelectorAll('.driver-list-item');
  
  expect(filteredDrivers).toHaveLength(1);
  expect(filteredDrivers[0]).toHaveTextContent('Lewis Hamilton');
});

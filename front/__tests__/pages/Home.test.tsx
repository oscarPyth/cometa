// __tests__/pages/Home.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useStore } from '../../src/stores/useStore';
import Home from '../../src/pages/Home';

// Mock del store
jest.mock('../../src/stores/useStore');

const mockUseStore = useStore as jest.MockedFunction<typeof useStore>;

describe('Home', () => {
  const mockState = {
    beers: [
      { name: 'Beer 1', quantity: 10, price: 5.0, available: true, image: "", id: 1 },
      { name: 'Beer 2', quantity: 0, price: 6.0, available: false, image: "", id: 2 }
    ],
    getBeers: jest.fn(),
    beerCard: { name: 'Beer 1', quantity: 10, price: 5.0, available: true },
    chooseCard: jest.fn(),
    invoice: [],
    orders: [],
    getOrders: jest.fn(),
    rounds: [],
    getRounds: jest.fn(),
  };

  beforeEach(() => {
    mockUseStore.mockImplementation((selector) => selector(mockState));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Home component with table and card', () => {
    render(<Home />);

    expect(screen.getByText('Stock')).toBeInTheDocument();
    const beer1Elements = screen.getAllByText('Beer 1').filter(element => element.tagName === 'TD');
    expect(beer1Elements).toHaveLength(1);
    expect(beer1Elements[0]).toBeInTheDocument();

    const beer2Elements = screen.getAllByText('Beer 2').filter(element => element.tagName === 'TD');
    expect(beer2Elements).toHaveLength(1);
    expect(beer2Elements[0]).toBeInTheDocument();
  });

  test('calls getBeers on mount', () => {
    render(<Home />);

    expect(mockState.getBeers).toHaveBeenCalledTimes(1);
  });
});

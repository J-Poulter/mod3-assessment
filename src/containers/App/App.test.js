import App from './App';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

const testStore = createStore(rootReducer)

const mockOrders = [
  { id: 1, name: 'Pat', ingredients: ['beans', 'cheese', 'lettuce'] },
  { id: 2, name: 'Patrick', ingredients: ['carnitas', 'queso fresco', 'lettuce'] }
]

const newOrder = { id: 3, name: 'Frank', ingredients: ['steak', 'guacamole', 'jalapenos'] }

const renderTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <App />
    </Provider>
  )
}


describe('App', () => {
  it('should render the correct content', () => {
    const { getByText, getAllByRole } = renderTestWrapper();
    
    const ingredientsButtons = getAllByRole('button');
    const appTitle = getByText('Burrito Builder');
    const noOrdersNotice = getByText('No orders yet!');
    const submitButton = getByText('Submit Order');
    const sofritasButton = getByText('sofritas');
    const guacamoleButton = getByText('guacamole');
    const steakButton = getByText('steak');
    const noIngredientsNotice = getByText('Order: Nothing selected');

    expect(ingredientsButtons).toHaveLength(13);
    expect(appTitle).toBeInTheDocument();
    expect(noOrdersNotice).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(sofritasButton).toBeInTheDocument();
    expect(guacamoleButton).toBeInTheDocument();
    expect(steakButton).toBeInTheDocument();
    expect(noIngredientsNotice).toBeInTheDocument();
  })
})

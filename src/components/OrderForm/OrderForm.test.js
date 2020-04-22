import OrderForm from './OrderForm';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';

const testStore = createStore(rootReducer)

const renderTestWrapper = () => {
  return render(
    <Provider store={testStore}>
      <OrderForm />
    </Provider>
  )
}

describe('OrderForm', () => {
  it('should render the correct starting content', () => {
  const { getByText, debug, getAllByRole } = renderTestWrapper()
  debug()
    const ingredientsButtons = getAllByRole('button');
    const submitButton = getByText('Submit Order');
    const sofritasButton = getByText('sofritas');
    const guacamoleButton = getByText('guacamole');
    const steakButton = getByText('steak');
    const noIngredientsNotice = getByText('Order: Nothing selected');

    expect(ingredientsButtons).toHaveLength(13);
    expect(submitButton).toBeInTheDocument();
    expect(sofritasButton).toBeInTheDocument();
    expect(guacamoleButton).toBeInTheDocument();
    expect(steakButton).toBeInTheDocument();
    expect(noIngredientsNotice).toBeInTheDocument();
  })
})
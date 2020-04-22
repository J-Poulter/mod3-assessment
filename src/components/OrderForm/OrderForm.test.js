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

  it('should update state as ingredients are added and names are entered', () => {
    const { getByText, debug, getByPlaceholderText } = renderTestWrapper()

    const nameInput = getByPlaceholderText('Name');

    expect(nameInput.value).toBe('')
    fireEvent.change(nameInput, {target: {value: 'mockName'}})

    expect(nameInput.value).toBe('mockName')

    const steakButton = getByText('steak');
    const guacamoleButton = getByText('guacamole');
    const sofritasButton = getByText('sofritas');
    fireEvent.click(steakButton)
    fireEvent.click(guacamoleButton)
    fireEvent.click(sofritasButton)
    
    const pendingOrder = getByText('Order: steak, guacamole, sofritas')
    expect(pendingOrder).toBeInTheDocument()
  })

  it('should be able to submit an order only when input is entered for name and ingredients are clicked', () => {
    const { getByText, debug, getByPlaceholderText } = renderTestWrapper()

    const submitButton = getByText('Submit Order');
    fireEvent.click(submitButton)
    expect
  })
})
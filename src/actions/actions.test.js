import * as actions from '.';

const mockOrders = [
  { id: 1, name: 'Pat', ingredients: ['beans', 'cheese', 'lettuce'] },
  { id: 2, name: 'Patrick', ingredients: ['carnitas', 'queso fresco', 'lettuce'] }
]

const newOrder = { id: 3, name: 'Frank', ingredients: ['steak', 'guacamole', 'jalapenos'] }

describe('Action Creators', () => {
  it('should have a type for SET_ORDERS and a correct payload', () => {
    const expectedAction = {
      type: 'SET_ORDERS',
      orders: mockOrders
    }
    const result = actions.setOrders(mockOrders)
    expect(result).toEqual(expectedAction)
  })

  it('should have a type for ADD_ORDER and a correct payload', () => {
    const expectedAction = {
      type: 'ADD_ORDER',
      newOrder
    }
    const result = actions.updateOrders(newOrder)
    expect(result).toEqual(expectedAction);
  })
})
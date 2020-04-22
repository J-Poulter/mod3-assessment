import { orders } from '../reducers/orders';

const mockOrders = [
  {id: 1, name: 'Pat', ingredients: ['beans', 'cheese', 'lettuce']},
  {id: 2, name: 'Patrick', ingredients: ['carnitas', 'queso fresco', 'lettuce']}
]

const newOrder = {id: 3, name: 'Frank', ingredients: ['steak', 'guacamole', 'jalapenos']}

describe('orders', () => {
  it('should be able to return the initial state', () => {
    const expected = [];
    const result = orders(undefined, [])
    expect(result).toEqual(expected)
  })

  it('should be able to setOrders', () => {
    const expected = [...mockOrders]
    const result = orders(undefined, {
      type: 'SET_ORDERS',
      orders: mockOrders
    })
    expect(result).toEqual(expected)
  })

  it('should be able to add a new order', () => {
    const expected = [...mockOrders, newOrder]
    const result = orders(mockOrders, {
      type: 'ADD_ORDER',
      newOrder
    })
    expect(result).toEqual(expected)
  })
})
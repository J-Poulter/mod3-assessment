export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const addOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(order)
  })
    .then(response => response.json())
}

export const deleteOrder = (orderId) => {
  return fetch(`http://localhost:3001/api/v1/orders/${orderId}`, {
    method: 'DELETE',
  })
}
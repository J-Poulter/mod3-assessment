import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { getOrders, deleteOrder } from '../../apiCalls';
import { setOrders } from '../../actions';

class Orders extends Component {

  componentDidMount = () => {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  handleOrderDelete = (orderId) => {
    deleteOrder(orderId)
    const updatedOrders = this.props.orders.filter(order => order.id !== orderId)
    this.props.setOrders(updatedOrders)
  }

  orderEls = () => { 
    return this.props.orders.map(order => {
      return (
        <div className="order" key={order.id}>
          <button onClick={() => this.handleOrderDelete(order.id)}>Delete Order</button>
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li key={order.ingredients.indexOf(ingredient)}>{ingredient}</li>
            })}
          </ul>
        </div>
    )
  });
}

    render() {
      return (
        <section>
          { this.orderEls().length ? this.orderEls() : <p>No orders yet!</p> }
        </section>
      )
    }
}

const mapStateToProps = ({ orders }) => ({
  orders
});

const mapDispatchToProps = dispatch => (
  {
    setOrders: (orders) => dispatch(setOrders(orders))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
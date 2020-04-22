import React, { Component } from 'react';
import './Orders.css';
import { connect } from 'react-redux';
import { getOrders } from '../../apiCalls';
import { setOrders } from '../../actions';

class Orders extends Component {

  componentDidMount = () => {
    getOrders()
      .then(data => this.props.setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }

  orderEls = () => { 
    return this.props.orders.map(order => {
      return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
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
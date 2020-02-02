import React from 'react';
import CheckoutContainer from './CheckoutContainer';

export default class Checkout extends React.PureComponent {
  render() {
      return <CheckoutContainer {...this.props} />
  }
}
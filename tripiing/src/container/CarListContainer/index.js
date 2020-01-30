import React from 'react';
import CarListContainer from './CarListContainer';
export default class CarList extends React.PureComponent {
  render() {
      return <CarListContainer {...this.props} />
  }
}
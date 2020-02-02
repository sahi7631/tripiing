import React from 'react';
import AddCarContainer from './AddCarComponent';

export default class AddCar extends React.PureComponent {
  render() {
      return <AddCarContainer {...this.props} />
  }
}
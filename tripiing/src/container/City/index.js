import React from 'react';
import CityContainer from './CityContainer';

export default class City extends React.PureComponent {
  render() {
      return <CityContainer {...this.props} />
  }
}
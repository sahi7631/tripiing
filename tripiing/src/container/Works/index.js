import React from 'react';
import WorkContainer  from './WorkContainer';

export default class Work extends React.PureComponent {
  render() {
      return <WorkContainer {...this.props} />
  }
}
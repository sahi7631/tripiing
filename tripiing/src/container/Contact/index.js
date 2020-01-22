import React from 'react';
import ContactContainer from './ContactContainer';

export default class Contact extends React.PureComponent {
  render() {
      return <ContactContainer {...this.props} />
  }
}
import React from 'react';
import AboutContainerAbstract from './AboutContainerAbstract';
import Header from '../Header';

class AboutContainer extends AboutContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
               <Header/>
               <h1>Hello About</h1>
            </div>
        )
    }
}

export default AboutContainer;
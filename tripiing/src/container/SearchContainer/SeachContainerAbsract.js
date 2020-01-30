import React from 'react';

class SearchContainerAbstract extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            date: new Date(),
        }
    }
    
    onChange = () => {

    }
 
    render() {
        return null;
    }
}

export default SearchContainerAbstract
import React from 'react';

class CarListContainerAbstract extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "honda",
                },
                {
                    name: "honda",
                },
                {
                    name: "honda",
                },
                {
                    name: "honda",
                },
                {
                    name: "honda",
                }
            ]
        }
    }

    callback = (key) => {
        console.log(key);
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {
        return null;
    }
}

export default CarListContainerAbstract;
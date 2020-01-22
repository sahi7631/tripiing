import React from 'react';
import { Input } from 'antd';
import SubscribeContainerAbstract from './SubscribeContainerAbstract';
const { Search } = Input;

class SubscribeContainer extends SubscribeContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px', padding: '30px' }}>
                <div>
                    <h2>Subscribe Us </h2>
                    <p> Subscribe Tripiing to get latest offers and deals to day .</p>
                </div>
                <div>
                    <Search
                        placeholder="Enter Your Email"
                        enterButton="Submit"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </div>
            </div>
        )
    }
}

export default SubscribeContainer;
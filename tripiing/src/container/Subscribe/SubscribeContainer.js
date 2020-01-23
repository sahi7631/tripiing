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
            <div className="container" style = {{ paddingTop: '50px', paddingBottom: '30px'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Subscribe Us </h2>
                        <p> Subscribe Tripiing to get latest offers and deals to day .</p>
                    </div>
                    <div className="col-sm-6">
                        <Search
                            placeholder="Enter Your Email"
                            enterButton="Submit"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscribeContainer;
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
                        <h2>Stay updated to offers and everything else on Tripiing</h2>
                        <p style = {{ color:'#000', textAlign: 'justify', marginTop: '40px'}}>By subscribing to our email newsletter, you are granting permission Tripiing to stay connected to you via email.
                        You may unsubscribe via the link found at the bottom of every email. See our Email Privacy Policy (//hperlink) for details</p>
                    </div>
                    <div className="col-sm-6">
                        <Search
                            placeholder="Enter Your Email"
                            enterButton="Submit"
                            size="large"
                            onSearch={value => console.log(value)}
                            style = {{ marginTop: '30px'}}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscribeContainer;
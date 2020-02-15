import React from 'react';
import { Button, Icon } from 'antd';
import EarnWithUsContainerAbstract from './EarnWithUsAbstract';
import { Timeline } from 'antd';
import { Popover } from 'antd';
import backimage from '../../images/earnback.jpeg';
import './styles.css';

class EarnWithUsContainer extends EarnWithUsContainerAbstract {
    constructor(props) {
        super(props);
    }

    contentApplication = (<div>
        <p>Fill in your details in the onboarding application
         via our website or app.</p>
    </div>)

    render() {
        return (
            <div className="earn-withus-container">
                <div className="container">
                    <div className="row  earn-withus-wrapper ">
                        <div className="col-sm-6 textWrapper">
                            <h1>Earn With Us</h1>
                            <h3>
                                Do you use your car occasionally?
                                Let it work for you.
                                Share your car with Tripiing customers and turn it to an earning entity.
                             </h3><br /><br />
                            <Timeline>
                                <Timeline.Item color="green"  dot={<Icon type="account-book" style={{ fontSize: '20px', border: '1px soild #ccc', borderRadius: '50%' }}/>}>
                                        <h3 type="primary"> Submit Onboarding Application</h3>
                                    <h4>Fill in your details in the onboarding application
                                       via our website or app.</h4>
                                </Timeline.Item>
                                <Timeline.Item color="green" dot={<Icon type="car" style={{ fontSize: '20px' }}/>}>
                                    <h3>List Your Car </h3>
                                    <h4>Create a listing of your car. Listing takes just a few minutes.</h4>
                               </Timeline.Item>
                                <Timeline.Item color="green" dot={<Icon type="android" style={{ fontSize: '20px' }}/>}>
                                    <h3>Setup The App</h3>
                                    <h4>Now you are ready to set up your app as Host.</h4>
                                </Timeline.Item>
                                <Timeline.Item color="green" dot={<Icon type="transaction" style={{ fontSize: '20px' }}/>}>
                                    <h3>Start Earning At Tripiing</h3>
                                    <h4>Voila! Your car now turns to an earning entity for you</h4>
                                </Timeline.Item>
                            </Timeline>
                            <Button size="large" style = {{
                                height: '60px',
                                width: '450px',
                                backgroundColor: '#117864',
                                color: '#fff'
                            }} >List your Car</Button>
                        </div>
                        <div className="col-sm-6">
                            <img src={backimage}  style = {{ height: '600px', width: '500px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EarnWithUsContainer;
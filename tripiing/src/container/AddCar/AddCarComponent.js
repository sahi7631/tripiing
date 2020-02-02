import React from 'react';
import AddCarContainerAbstract from './AddCarComponentAbstract';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';
import {
    Form,
    Collapse
} from 'antd';
const { Panel } = Collapse;

class AddCarContainer extends AddCarContainerAbstract {
    constructor(props) {
        super(props);
    }
    text = (
        <p style={{ paddingLeft: 24 }}>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
            as a welcome guest in many households across the world.
        </p>);

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Collapse bordered={false} expandIconPosition="right" defaultActiveKey={['1', '2']}>
                                <Panel className header="Your Detail" key="1">
                                </Panel>
                                    <Panel header="Car Detail" key="2">
                                        {this.text}
                                    </Panel>
                                    <Panel header="Driver’s license" key="3">
                                        {this.text}
                                    </Panel>
                                    <Panel header="Car photos" key="4">
                                        {this.text}
                                    </Panel>

                            </Collapse>,
                          </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>
                )
            }
        }
    const WrappedHorizontalLoginForm = Form.create({ name: 'carDetail' })(AddCarContainer);     
    export default WrappedHorizontalLoginForm;
import React from 'react';
import AddCarContainerAbstract from './AddCarComponentAbstract';
import Header from '../Header';
import Footer from '../Footer';
import './styles.css';
import {
    Form,
    Collapse,
    Select,
    Steps
} from 'antd';
const { Step } = Steps;
const { Option } = Select;
const { Panel } = Collapse;

class AddCarContainer extends AddCarContainerAbstract {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container" style={{ marginTop: 50 }}>
                    <Steps current={0}>
                        <Step title="Your Detail" />
                        <Step title="Car Details" />
                        <Step title="Driver’s license" />
                        <Step title="Car Photo" />
                        <Step title="Finished" />
                    </Steps>
                    <div className="row" style={{ marginTop: 50 }}>
                        <div className="col-sm-12">
                            <Collapse bordered={false} expandIconPosition="right" defaultActiveKey={['1', '2']}>
                                <Panel className header="Your Detail" key="1">
                                    <div className="container">
                                        <div className="row">
                                            <div class="form-group col-sm-3">
                                                <label for="name">Location:</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-group col-sm-3">
                                                <label for="name">Name:</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>
                                            <div class="form-group col-sm-3">
                                                <label for="mobile">Mobile:</label>
                                                <input type="text" class="form-control" id="mobile" />
                                            </div>
                                            <div class="form-group col-sm-3">
                                                <label for="email">Email:</label>
                                                <input type="text" class="form-control" id="email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-group col-sm-3">
                                                <label for="name">Street address:</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>
                                            <div class="form-group col-sm-3">
                                                <label for="name">City:</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>
                                            <div class="form-group col-sm-3">
                                                <label for="name">State / Region / Province:</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-group col-sm-3">
                                                <label for="name">Zip / Postal code:</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div class="form-group col-sm-3">
                                                <label for="name">Profile Pic:</label>
                                                <input type="file" class="form-control" id="name" />
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                                <Panel header="Car Detail" key="2">
                                    <div className="row">
                                        <div class="form-group col-sm-3">
                                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Lucy</Option>
                                                <Option value="disabled" disabled>
                                                    Disabled
                                                </Option>
                                                <Option value="Yiminghe">yiminghe</Option>
                                            </Select>
                                        </div>
                                    </div>
                                </Panel>
                                <Panel header="Driver’s license" key="3">
                                    <div className="row">
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload front:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload Back:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                    </div>
                                </Panel>
                                <Panel header="Car photos" key="4">
                                    <div className="row">
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload front image:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload Back:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload Left:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload Right:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                        <div class="form-group col-sm-3">
                                            <label for="name">Upload Full Image:</label>
                                            <input type="file" class="form-control" id="name" />
                                        </div>
                                    </div>
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
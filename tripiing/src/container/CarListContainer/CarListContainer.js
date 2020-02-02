import React from 'react';
import CarListContainerAbstract from './CardListAbstractContainer';
import Header from '../Header';
import Footer from '../Footer';
import CardComponent from '../../component/Card';
import {
    Select,
    Input,
    Collapse,
    Checkbox,
    Row,
    Col,
    Rate,
    Pagination
} from 'antd';
const { Search } = Input;
const { Option } = Select;
const { Panel } = Collapse;

class CarListContainer extends CarListContainerAbstract {
    constructor(props) {
        super(props);
    }

    render() {
        let carlist = this.state.list.map(item => {
            return (
                <CardComponent details={item} />
            )
        });
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="pull-right"> <strong>Sort By: </strong>
                            <Select size="large" defaultValue="Latest" style={{ width: 200 }} onChange={this.handleChange}>
                                <Option value="Maruti Dzire">Price-Low to High </Option>
                                <Option value="Honda City">Price-High to Low</Option>
                                <Option value="Hyundai Verna">Popularity</Option>
                                <Option value="Maruti Ciaz">Latest</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="col-sm-3">
                            <Collapse onChange={this.callback} expandIconPosition="right" defaultActiveKey={['1', '2']}>
                                <Panel header="SEARCH BY BRAND OR MODEL" key="1">
                                    <Search
                                        placeholder="Search Brand"
                                        onSearch={value => console.log(value)}
                                        style={{ width: 200 }}
                                        size="large"
                                    />
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A">Hyundai(230)</Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="B">Maruti(190)</Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A">Honda(109)</Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A">Chevrolet(31)</Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A">Renault(28)</Checkbox>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header="SEARCH BY BUDGET" key="2">
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A"><strong> &#8377; 600 / Days </strong></Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="B"><strong> &#8377; 650 / Days </strong></Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A"><strong> &#8377; 800 / Days </strong></Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A"><strong> &#8377; 900 / Days </strong></Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A"><strong> &#8377; 930 / Days </strong></Checkbox>
                                        </Col>
                                    </Row>
                                    <Row style={{ paddingLeft: 10, paddingTop: 15, paddingRight: 10, paddingBottom: 15 }}>
                                        <Col span={16}>
                                            <Checkbox value="A"><strong> &#8377; 1000 / Days </strong></Checkbox>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header="SEARCH BY RATING" key="3">
                                    <Row>
                                        <Col span={2} style={{ marginLeft: 10, marginTop: 5 }}>
                                            <Checkbox value="A"></Checkbox>
                                        </Col>
                                        <Col span={14} style={{ marginLeft: 10 }}><Rate disabled defaultValue={5} /></Col>
                                    </Row>
                                    <Row style={{ paddingTop: 15, paddingBottom: 15 }}>
                                        <Col span={2} style={{ marginLeft: 10, marginTop: 5 }}>
                                            <Checkbox value="A"></Checkbox>
                                        </Col>
                                        <Col span={14} style={{ marginLeft: 10 }}><Rate disabled defaultValue={3} /></Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                        </div>
                        <div className="col-sm-9">
                            <div className="row">
                                {carlist}
                            </div>
                            <div className="row" style = {{ marginTop: 20, marginBottom: 20}}>
                                <Pagination
                                    onShowSizeChange={this.onShowSizeChange}
                                    defaultCurrent={3}
                                    total={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CarListContainer;
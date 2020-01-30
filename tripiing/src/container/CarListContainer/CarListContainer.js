import React from 'react';
import CarListContainerAbstract from './CardListAbstractContainer';
import Header from '../Header';
import Footer from '../Footer';
import Card from '../../component/Card';
import { Select, Input } from 'antd';
import { Checkbox, Row, Col } from 'antd';
import { Collapse } from 'antd';
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
                <Card name={item.name} />
            )
        });
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="pull-left">

                        </div>
                        <div className="pull-right">
                            <Select defaultValue="lucy" size="large" style={{ width: 120 }} onChange={this.handleChange}>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="disabled" disabled>
                                    Disabled
                                </Option>
                                <Option value="Yiminghe">yiminghe</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: '20px' }}>
                        <div className="col-sm-3">
                            <Collapse onChange={this.callback} expandIconPosition="right" defaultActiveKey={['1', '2']}>
                                <Panel header="SEARCH BY BRAND OR MODEL" key="1">
                                    <Search
                                        placeholder="input search text"
                                        onSearch={value => console.log(value)}
                                        style={{ width: 200 }}
                                        size="large"
                                    />
                                    <Row>
                                        <Col span={16}>
                                            <Checkbox value="A">Hyundai(230)</Checkbox>
                                        </Col>
                                    </Row>  
                                    <Row>  
                                        <Col span={16}>
                                            <Checkbox value="B">Maruti(190)</Checkbox>
                                        </Col>
                                    </Row>  
                                    <Row>    
                                        <Col span={16}>
                                            <Checkbox value="A">Honda(109)</Checkbox>
                                        </Col>
                                    </Row> 
                                    <Row>   
                                        <Col span={16}>
                                            <Checkbox value="A">Chevrolet(31)</Checkbox>
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col span={16}>
                                            <Checkbox value="A">Renault(28)</Checkbox>
                                        </Col>
                                    </Row>    
                                </Panel>
                                    <Panel header="SEARCH BY BUDGET" key="2">
                                    <Row>
                                        <Col span={16}>
                                            <Checkbox value="A">0-2(230)</Checkbox>
                                        </Col>
                                    </Row>  
                                    <Row>  
                                        <Col span={16}>
                                            <Checkbox value="B">2-4(190)</Checkbox>
                                        </Col>
                                    </Row>  
                                    <Row>    
                                        <Col span={16}>
                                            <Checkbox value="A">4-6(109)</Checkbox>
                                        </Col>
                                    </Row> 
                                    <Row>   
                                        <Col span={16}>
                                            <Checkbox value="A">6-8(31)</Checkbox>
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col span={16}>
                                            <Checkbox value="A">8-10(28)</Checkbox>
                                        </Col>
                                    </Row>  
                                    </Panel>
                                    <Panel header="SEARCH BY RATING" key="3">
                                    </Panel>
                            </Collapse>
                        </div>
                            <div className="col-sm-9">
                                {carlist}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                )
            }
        }
        
export default CarListContainer;
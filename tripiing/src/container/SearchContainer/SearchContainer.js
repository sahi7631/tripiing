import React from 'react';
import SearchContainerAbstract from './SeachContainerAbsract';
import './styles.css';
import { TimePicker } from 'antd';
import moment from 'moment';
import { Button, Icon, DatePicker } from 'antd';
import { Select } from 'antd';
import { Route } from 'react-router-dom';
const { Option } = Select;

class SearchContainer extends SearchContainerAbstract {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row" style={{ paddingTop: '350px' }}>
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12">
                                <p className="title">Way better than a rental </p>
                                <h2 className="sub-title">Book unforgettable cars from trusted hosts around the world</h2>
                            </div>
                        </div>
                        <div className="row selectorConatiner" style={{ backgroundColor: '#fff', borderRadius: '10px', height: '60px' }}>
                            <div style = {{ width: '15%'}}>
                                <Select defaultValue="Jaipur"  style={{
                                        width: "99.8%",
                                        border: "none",
                                        borderRadius: "0px",
                                        cursor: "pointer",
                                        fontSize: "17px",
                                        margin: "0px",
                                        padding: "0px",
                                        borderRight: '1px solid #ccc'
                                      }}
                                       size ="large"  onChange={this.handleChange}>
                                    <Option value="Jaipur">Jaipur</Option>
                                </Select>
                            </div>
                            <div className="selector">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    name="startDate"
                                    dateFormat="mm/dd/yyyy"
                                    placeholder = "Start Date"
                                    style={{
                                        width: "60%",
                                        border: "none",
                                        borderRadius: "0px",
                                        cursor: "pointer",
                                        fontSize: "17px",
                                        margin: "0px",
                                        padding: "0px",
                                        borderRight: '1px solid #ccc'
                                      }}
                                />
                                 <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} 
                                  style={{
                                    width: "38%",
                                    border: "none",
                                    borderRadius: "0px",
                                    cursor: "pointer",
                                    fontSize: "17px",
                                    margin: "0px",
                                    padding: "0px",
                                    borderRight: '1px solid #ccc'
                                  }}
                                  placeholder = "Start Time"
                                  />
                            </div>
                            <div className="selector">
                                <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleChange}
                                    name="endDate"
                                    format={'DD MMM, YYYY'}
                                    placeholder = "End Date"
                                    style={{
                                        width: "60%",
                                        border: "none",
                                        borderRadius: "0px",
                                        cursor: "pointer",
                                        fontSize: "17px",
                                        margin: "0px",
                                        padding: "0px",
                                        borderRight: '1px solid #ccc'
                                      }}
                                />
                                 <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                                  style={{
                                    width: "39.8%",
                                    border: "none",
                                    borderRadius: "0px",
                                    cursor: "pointer",
                                    fontSize: "17px",
                                    margin: "0px",
                                    padding: "0px",
                                    borderRight: '1px solid #ccc'
                                  }}
                                  placeholder = "End Time"
                                 />
                            </div>
                            <div className="buttonSelector">
                                <Route render={({ history }) => (
                                    <Button type="danger" size="large" style={{ width: '100%', height: '100%' }} onClick={() => history.push('/carlist')} >
                                        Search
                                        <Icon type="arrow-right" />
                                    </Button>)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchContainer;
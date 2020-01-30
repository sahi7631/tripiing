import React from 'react';
import SearchContainerAbstract from './SeachContainerAbsract';
import { Button, DatePicker, Icon } from 'antd';
import { Select } from 'antd';
import { Route } from 'react-router-dom';
const { Option } = Select;

class SearchContainer extends SearchContainerAbstract {
    constructor(props) {
        super(props);
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{ padding: '20px', marginTop: '30px' }}>
                    <div className="col-sm-12" style={{ textAlign: 'center' }}>
                        <h1>Welcome to  Tripiing</h1>
                    </div>
                </div>
                <div className="row" style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '10px', marginTop: '100px' }}>
                    <div className="col-sm-3">
                        <Select defaultValue="Jaipur" size="large" style={{ width: '100%' }} onChange={this.handleChange}>
                            <Option value="Jaipur">Jaipur</Option>
                        </Select>
                    </div>
                    <div className="col-sm-3">
                        <DatePicker onChange={this.onChange} size="large" style={{ width: '100%' }} showTime placeholder="Start Date & Time" />
                    </div>
                    <div className="col-sm-3">
                        <DatePicker onChange={this.onChange} size="large" style={{ width: '100%' }} showTime placeholder="End Date & Time" />
                    </div>
                    <div className="col-sm-3">
                        <Route render={({ history }) => (
                            <Button type="primary" size="large" style={{ width: '70%' }} onClick={() => history.push('/carlist')} >
                                Search
                                <Icon type="arrow-right" />
                            </Button>)} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchContainer;
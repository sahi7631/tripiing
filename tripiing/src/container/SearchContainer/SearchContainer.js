import React from 'react';
import SearchContainerAbstract from './SeachContainerAbsract';
import { Button, DatePicker, Icon } from 'antd';
import { Select } from 'antd';
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
            <div className = "container">
                <div style={{display: 'flex', justifyContent: 'flex-start', marginTop: '30px'}}>
                    <div>
                        <Select defaultValue="Jaipur" style={{ width: 100 }} onChange={this.handleChange}>
                            <Option value="Jaipur">Jaipur</Option>
                        </Select>
                    </div>
                    <div style = {{ margin: 'auto'}}>
                        <h1>Welcome to  Triping</h1>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px'}}>
                    <div style={{ height: '70px', display: 'flex', justifyContent: 'space-around', padding: '10px', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                            <div style={{ width: '40%' }}>
                                <DatePicker onChange={this.onChange} size="large" showTime placeholder="Start Date & Time" />
                            </div>
                            <div style={{ width: '40%' }}>
                                <DatePicker onChange={this.onChange} size="large" showTime placeholder="End Date & Time" />
                            </div>
                            <div style={{ width: '10%' }}>
                                <Button type="primary" size="large" >
                                    Search
                                <Icon type="arrow-right" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchContainer;
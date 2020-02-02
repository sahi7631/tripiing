import React from 'react';
import { Card } from 'antd';
import { Rate } from 'antd';
import { Button } from 'antd';
import { Route } from 'react-router-dom';

const CardComponent = (props) => {
    return (
        <div className="col-sm-12" style={{ marginBottom: 20 }}>
            <div className="row">
                <Card
                    hoverable
                    style={{ width: '100%', height: 202 }}
                    cover={<img alt="example" className="col-sm-4" src={props.details.images} style={{ width: '30%', height: 200, margin: '0px', padding: '0px' }} />}
                >
                    <div className="col-sm-5">
                        <div style = {{ paddingLeft: '30px'}}>
                            <h3>{props.details.name}</h3>
                            <p><Rate disabled defaultValue={props.details.rating} /> <span><strong>{props.details.trip} trips </strong></span></p>
                            <p><strong> &#8377; {props.details.price} / Days </strong></p>
                            <p><span class="glyphicon glyphicon-tag" style = {{ marginRight: '15px'}}></span>Click here to check offer and discount </p>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <Route render={({ history }) => (
                            <Button  size = "large" type="danger" style = {{ marginTop: 120, width: '100%'}} onClick={() => history.push('/checkout')}>Book Now</Button>
                            )} />
                    </div>
                </Card>
            </div>
        </div>
    )
}
export default CardComponent;
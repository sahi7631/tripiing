import React from 'react';
import CheckoutContainerAbstract from './CheckoutContainerAbstract';
import Header from '../Header';
import { Icon } from 'antd';

import fordImage from '../../images/ford.jpg';
import { Rate } from 'antd';

class CheckoutContainer extends CheckoutContainerAbstract {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <Header />
                <div class='col-sm-12' style={{margin:'20px'}}>
                    <div class='col-md-8'>
                        <div class='col-sm-12' style={{ paddingBottom: '50px', borderBottom: '5px solid black' }}>
                            <div class='col-sm-4'>
                                <img src={fordImage} alt="" width='150px' height='150px' />
                            </div>
                            <h3><b>Maruthi Swift Dezire</b></h3>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Rate disabled defaultValue={2} /><h3 style={{ paddingLeft: '10px', margin: 0 }}><b>2.0</b></h3>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div>
                                    <h2 style={{ marginBottom: '8px', marginTop: '8px' }}>10:00pm</h2>
                                    <h4>28 Jan 20, Mon</h4>
                                </div>
                                <div style={{ position: 'relative', width: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ width: "60px", height: "4px", background: 'red', position: 'absolute', bottom: "47%", zIndex: -1 }} />
                                    <div style={{ borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'red', color: 'white', height: '33px', width: '33px' }}><h4 style={{ margin: 0, color: 'white' }}><b>TO</b></h4></div>
                                </div>
                                <div>
                                    <h2 style={{ marginBottom: '8px', marginTop: '8px' }}>10:00pm</h2>
                                    <h4>28 Jan 20, Mon</h4>
                                </div>
                            </div>
                        </div>

                        <div class='col-sm-12' style={{ paddingBottom: '60px', paddingTop: '60px' }}>
                            <div class='col-sm-6' style={{ display: 'flex' }}><i class="fas fa-user-friends"></i><h4 style={{ paddingLeft: "20px" }}>5 Seater</h4></div>
                            <div class='col-sm-6' style={{ display: 'flex' }}><Icon type="file-text" /><h4 style={{ paddingLeft: "20px" }}>45 Liters</h4></div>
                            <div class='col-sm-6' style={{ display: 'flex', marginTop: '20px' }}><Icon type="file-text" /><h4 style={{ paddingLeft: "20px" }}>500 Km Free</h4></div>
                            <div class='col-sm-6' style={{ display: 'flex', marginTop: '20px' }}><Icon type="file-text" /><h4 style={{ paddingLeft: "20px" }}>Insurance Included</h4></div>
                        </div>

                        <div class='col-sm-12' style={{ border: '5px solid black', padding: 0 }}>
                            <div class='col-sm-12' style={{ height: '60px', borderBottom: '1px solid black' }}>
                                <Icon type="file-text" /><h3>Mansovar, Jaipur</h3>
                            </div>
                            <div class='col-sm-12' style={{ height: '200px' }}></div>
                        </div>

                        <div class='col-sm-12' style={{ marginTop: '60px' }}>
                            <div class='col-sm-3'>
                                <img src={fordImage} alt="" width='120px' height='120px' />
                            </div>
                            <h3><b>Manu Tours and Travels</b></h3>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Rate disabled defaultValue={2} /><h4 style={{ paddingLeft: '10px', margin: 0 }}><b>2.0</b></h4>
                            </div>
                            <h4 style={{ marginTop: "8px" }}><i>20 Trips</i></h4>
                        </div>

                        <div class='col-sm-12' style={{ marginTop: '60px' }}>
                            <h3 style={{ marginBottom: '30px' }}>IMPORTANT PLANS TO REMEMBER</h3>
                            <ul class="a" style={{ padding: 0, paddingLeft: '16px' }}>
                                <h4><li style={{ lineHeight: 1.3 }}><b>CHANGE IN PRICING PLAN: </b>The pricing plan (5 kms/hr, without fuel) connot be changed after the booking is made</li></h4>
                                <h4><li style={{ lineHeight: 1.3 }}><b>FUEL: </b>In case you are returning the car at lower fuel level than what was recieved, we will charge a flat Rs 500 refuelling service charge + actula fuel cost to get the tank to the same level as what was recieved</li></h4>
                                <h4><li style={{ lineHeight: 1.3 }}><b>TOLLS, PARKING, INTER-STATE TAXES: </b>To be paid by you</li></h4>
                                <h4><li style={{ lineHeight: 1.3 }}><b>ID VERIFICATION: </b>Please keep your orginal Driving License handy. While delivering the car to you, our excecutive will verify your orginal Driving License and ID proof (same as the ones who details were provided while making the booking). This verification is madatory. In the unfortunate cse where you cannot show these documents, we will not be able to handover the car to you, and it will be treated as a late cancellation (100% of the fare would be payable). Driving license printed on A4 sheet of paper (orginal or otherwise) will not be considered as a valid dociument.</li></h4>
                                <h4><li style={{ lineHeight: 1.3 }}><b>PRE HANDOVER INSPECTION: </b>Please inspect the car (including the fuel guage and odometer) thorougly before approving the checklist.</li></h4>
                            </ul>
                        </div>

                    </div>

                    <div class='col-sm-4' style={{ border: '1px solid black', borderRadius: '16px', padding: 0, height: 'fit-content' }}>
                        <div class="col-sm-12" style={{ borderBottom: '1px solid black', background: '#337ab7', paddingTop: '10px', borderTopRightRadius: '16px', borderTopLeftRadius: '16px' }}><h3><b>Price Breakout</b></h3></div>

                        <div class='col-sm-12' style={{ borderBottom: '1px solid black', padding: 0, paddingTop: '1em', paddingBottom: '.5em' }}>
                            <div class='col-sm-9' >
                                <h4>Booking Fee</h4>
                            </div>
                            <div class='col-sm-3'>
                                <h5><b>$5000</b></h5>
                            </div>
                        </div>

                        <div class='col-sm-12' style={{ borderBottom: '1px solid black', padding: 0, paddingTop: '1em', paddingBottom: '.5em' }}>
                            <div class="col-sm-9">
                                <h4>GST</h4>
                                <div class='col-sm-12' style={{ paddingTop: '1em', paddingBottom: '.6em' }}>
                                    <div class='col-sm-1'></div>
                                    <div class='col-sm-11'>
                                        <h5><i>CSGT</i></h5>
                                        <h5><i>SGST</i></h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <h5><b>$5000</b></h5>
                                <div style={{ paddingTop: '1em', paddingBottom: '.6em' }}>
                                    <h5><i>$250</i></h5>
                                    <h5><i>$250</i></h5>
                                </div>
                            </div>
                        </div>

                        <div class='col-sm-12' style={{ borderBottom: '1px solid black', padding: 0, paddingTop: '1em', paddingBottom: '.5em' }}>
                            <div class="col-sm-9">
                                <h4>Promitional Code</h4>
                                <h5 style={{ paddingTop: '1em', paddingBottom: '.6em' }}><u><i>samplepromo</i></u></h5>
                            </div>
                            <div class="col-sm-3">
                                <h5><i>10%</i></h5>
                                <h5 style={{ paddingTop: '.9em', paddingBottom: '.6em' }}><b>-$50</b></h5>
                            </div>
                        </div>

                        <div class='col-sm-12' style={{ borderBottom: '1px solid black', padding: 0, paddingTop: '1em', paddingBottom: '.5em' }}>
                            <div class="col-sm-9">
                                <h4>Security Deposit</h4>
                            </div>
                            <div class="col-sm-3">
                                <h5><b>$5000</b></h5>
                            </div>
                        </div>

                        <div class='col-sm-12' style={{ borderBottom: '1px solid black', padding: 0, paddingTop: '1em', paddingBottom: '.5em' }}>
                            <div class="col-sm-9">
                                <h4><b>Total Payable</b></h4>
                            </div>
                            <div class="col-sm-3">
                                <h5><b>$5000</b></h5>
                            </div>
                        </div>

                        <div class='col-sm-12' style={{ alignItems: 'center', paddingTop: '1.8em', paddingBottom: '1.2em', textAlign: 'center' }}>
                            <button type="button" style={{paddingLeft:'25%', paddingRight:'25%'}} class="btn btn-primary btn-lg">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutContainer;
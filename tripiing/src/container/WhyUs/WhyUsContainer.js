import React from 'react';
import WhyUsContainerAbstract from './WhyUsContainerAbsrtract';
import rentcarImage from '../../images/whytripiing/rentanycar.svg';
import afford from '../../images/whytripiing/affordable.svg';
import getOnTime from '../../images/whytripiing/getthereontime.svg';
import privacy from '../../images/whytripiing/privacy.svg'

class WhyUsContainer extends WhyUsContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container" style={{ borderBottom: '2px solid #eee', paddingBottom: '30px', paddingTop: '40px' }}>
                    <h2>Why Us ?</h2>
                    <div className="row">
                        <div className="col-sm-3">
                            <h4 style = {{ marginBottom: '20px', padding: '10px'}}>Rent Just Any Car</h4>
                            <img src={rentcarImage} style = {{ height: '150px'}}></img>
                            <p style = {{ textAlign: 'justify',  marginTop: '20px'}}>
                                You can choose just any car on rent from our large pool as per your choice.
                                With a variety of car sizes and convenient pick-up and drop-off locations
                                Tripiing caters any kind of requisite.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h4 style = {{ marginBottom: '20px', padding: '10px'}}>Get there on time</h4>
                            <img src={getOnTime} style = {{ height: '150px'}}></img>
                            <p style = {{ textAlign: 'justify',  marginTop: '20px'}}>
                                Tripiing car rental service like any other saves time that
                                go lapse in to get a taxi ride or a public transport.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h4 style = {{ marginBottom: '20px', padding: '10px'}}>Affordable Fleets</h4>
                            <img src={afford} style = {{ height: '150px'}}></img>
                            <p style = {{ textAlign: 'justify',  marginTop: '20px'}}>Tripiing ensures that you get a reliable rental experience at an affordable
                               price. We constantly keep on working for you to get a reasonable rental
                               options.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <h4 style = {{ marginBottom: '20px', padding: '10px'}}>Privacy and freedom</h4>
                            <img src={privacy} style = {{ height: '150px'}}></img>
                            <p style = {{ textAlign: 'justify', marginTop: '20px'}}>
                                You are the master: For entire booking period, you own the car at your
                                terms. We thoroughly check all the cars for standard safety before handing
                                over the keys to you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyUsContainer;
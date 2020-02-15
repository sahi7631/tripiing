import React from 'react';
import WhyUsContainerAbstract from './WhyUsContainerAbsrtract';
import './styles.css';
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
                <div className="container">
                    <div className="row  w-container">
                        <h1 className="w-title">Why Tripiing</h1>
                    </div>
                    <div className="row  w-container">
                        <div className="col-sm-3">
                            <img src={rentcarImage} className="w-image"></img>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="w-subtitle">Rent Just Any Car</h4>
                            <p className="w-desc">
                                You can choose just any car on rent from our large pool as per your choice.
                                With a variety of car sizes and convenient pick-up and drop-off locations
                                Tripiing caters any kind of requisite.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <img src={getOnTime} className="w-image"></img>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="w-subtitle">Get there on time</h4>
                            <p className="w-desc">
                                Tripiing car rental service like any other saves time that
                                go lapse in to get a taxi ride or a public transport.
                            </p>
                        </div>
                    </div>
                    <div className="row  w-container">
                        <div className="col-sm-3">
                            <img src={afford} className="w-image"></img>
                        </div> 
                        <div className="col-sm-3">   
                            <h4 className="w-subtitle">Affordable Fleets</h4>
                            <p className="w-desc">Tripiing ensures that you get a reliable rental experience at an affordable
                               price. We constantly keep on working for you to get a reasonable rental
                               options.
                            </p>
                        </div>
                        <div className="col-sm-3">
                            <img src={privacy} className="w-image"></img>
                        </div>
                        <div className="col-sm-3">
                            <h4 className="w-subtitle">Privacy and freedom</h4>
                            <p className="w-desc">
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
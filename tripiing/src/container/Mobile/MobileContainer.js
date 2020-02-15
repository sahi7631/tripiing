import React from 'react';
import MobileContainerAbstract from './MobileContainerAbstract';
import './styles.css';
import backimage from '../../images/mobile-app-image.png';

class MobileContainer extends MobileContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="m-container">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-6">
                            <h3 className="m-title">Now Start Triping with Mobile</h3>
                            <p className="m-subtitle">
                                Need a quick trip companion? Just rent a car from Tripiing and self drive the car.<br/>
                                All you are required to do is:
                            </p>
                            <ul className="m-list-c">
                                <li>Download the Tripiing app from either Apple App Store or Google Play Store</li>
                                <li>Select your desired car model</li>
                                <li>Book your car for where and when you need it</li>
                                <li>End your booking right from our app</li>
                            </ul>
                        </div>
                        <div className="col-sm-6 m-mgcenter">
                            <img src={backimage}  style = {{ marginLeft: '100px', height: '400px', width: '350px'}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="imageContainer">
                            <h4 style={{ textAlign: 'center' }}>Download Now</h4>
                            <ul className="list-group listContainer">
                                <li className="list-group-item listContainer-item">
                                    <a href="#" title="Download Triping Free iOS App" target="_blank" rel="noopener">
                                        <img data-servewebp="true" data-lazy="true" data-gsll-src="https://stimg.cardekho.com/pwa/img/appstore.png" alt="Download CarDekho’s Free iOS App" src="https://stimg.cardekho.com/pwa/img/appstore.png" />
                                    </a>
                                </li>
                                <li className="list-group-item listContainer-item ">
                                    <a href="#" title="Download Triping Free Android App" target="_blank" rel="noopener">
                                        <img data-servewebp="true" data-lazy="true" alt="Download Triping Free Android App" src="https://stimg.cardekho.com/pwa/img/playstore.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default MobileContainer;
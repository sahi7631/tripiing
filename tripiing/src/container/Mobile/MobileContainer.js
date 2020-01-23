import React from 'react';
import MobileContainerAbstract from './MobileContainerAbstract';
import './styles.css';
import backimage from '../../images/backgroundimage.png';

class MobileContainer extends MobileContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="mobileContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 textContainer">
                            <h3>Now Start Triping with Mobile</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                        </div>
                        <div className="col-sm-6">
                            <img src={backimage} />
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
            </div >
        )
    }
}

export default MobileContainer;
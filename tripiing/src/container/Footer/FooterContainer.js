import React from 'react';
import { Icon } from 'antd';
import FooterContainerAbstract from './FooterContainerAbstract';
import "./styles.css";
import logo from '../../images/logo.png';

class FooterContainer extends FooterContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contaier-fluid footercontainer">
                <footer id="FooterWraper" data-track-component="Footer">
                    <nav className="footer_Nav">
                        <div className="gsc_container">
                            <div style = {{ textAlign: 'center', paddingBottom: '30px'}}>
                               <img src = {logo}  style = {{ height: '70px'}}/>
                            </div>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <ul className="list-group " style={{ display: 'flex', flexDirection: 'row' }} >
                                        <li className="list-group-item" style={{ border: '0px', fontSize: '30px' }}><a href="" target="_blank" title="Facebook" rel="noopener"><Icon type="facebook" /></a></li>
                                        <li className="list-group-item" style={{ border: '0px', fontSize: '30px' }}><a href="" target="_blank" title="Twitter" rel="noopener"><Icon type="twitter" /></a></li>
                                        <li className="list-group-item" style={{ border: '0px', fontSize: '30px' }}><a href="" target="_blank" title="Youtube" rel="noopener"><Icon type="youtube" /></a></li>
                                        <li className="list-group-item" style={{ border: '0px', fontSize: '30px' }}><a href="" target="_blank" title="Instagram" rel="noopener"><Icon type="instagram" /></a></li>
                                    </ul>
                                    <ul className="list-group" style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                        <li className="list-group-item borderLessList"><span>About Tripiing</span></li>
                                        <li className="list-group-item borderLessList">Privacy Policy</li>
                                        <li className="list-group-item borderLessList">Terms &amp; Conditions</li>
                                        <li className="list-group-item borderLessList"><span>Disclamier</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className = "term">All right reserved to Tripiing Private Limited</div>
                        </div>
                    </nav>
                </footer>
            </div >
        )
    }
}

export default FooterContainer;
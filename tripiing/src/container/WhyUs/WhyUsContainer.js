import React from 'react';
import WhyUsContainerAbstract from './WhyUsContainerAbsrtract';
import image1 from '../../images/backgroundimage.jpg'

class WhyUsContainer extends WhyUsContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container-fluid" style={{ display: 'flex',  borderBottom: '2px solid #eee' , paddingBottom: '30px' }}>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                {/* <div style={{ width: '30%', backgroundColor: 'transparent' }}>
                                    <h2>Why us? </h2>
                                </div> */}
                                <div style={{ width: '100%' }}>
                                    <img src={image1} alt="Los Angeles" style={{ width: '100%', height: '350px' }} />
                                </div>
                            </div>

                            <div className="item">
                                <div style={{ width: '100%' }}>
                                    <img src={image1} alt="Los Angeles" style={{ width: '100%', height: '350px' }} />
                                </div>
                            </div>

                            <div className="item">
                                <div style={{ width: '100%' }}>
                                    <img src={image1} alt="Los Angeles" style={{ width: '100%', height: '350px' }} />
                                </div>
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhyUsContainer;
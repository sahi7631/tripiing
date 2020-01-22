import React from 'react';
import CityContainerAbstract from './CityContainerAbstract';
import city1 from '../../images/city1.png';
import city2 from '../../images/city2.png';
import city3 from '../../images/city3.png';
import city4 from '../../images/city4.png';
import city5 from '../../images/city5.png';
import  "./styles.css";

 
class CityContainer extends CityContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className = "container-wapper">
            <div className = "container CityContainer">
                <div className = "CityContainerCard">
                  <img src={city1} className = "ImgContainer"/>
                </div>
                <div className = "CityContainerCard">
                  <img src={city2} className = "ImgContainer" />
                </div>
                <div className = "CityContainerCard">
                  <img src={city3} className = "ImgContainer"/>
                </div>
                <div className = "CityContainerCard">
                  <img src={city4} className = "ImgContainer" />
                </div>
                <div className = "CityContainerCard">
                  <img src={city5} className = "ImgContainer" />
                </div>
            </div>
          </div>
        )
    }
}

export default CityContainer;
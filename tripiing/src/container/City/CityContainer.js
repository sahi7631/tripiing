import React from 'react';
import CityContainerAbstract from './CityContainerAbstract';
import { Card } from 'antd';
import city1 from '../../images/city1.png';
import city2 from '../../images/city2.png';
import city3 from '../../images/city3.png';
import city4 from '../../images/city4.png';
import city5 from '../../images/city5.png';
import "./styles.css";



class CityContainer extends CityContainerAbstract {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ textAlign: 'center', padding: '20px', margin: '10px' }}>
          <h1>Top destinations</h1>
          <h3>Choose from thousands of cars in over 10 cities across the Rajasthan</h3>
        </div>
        <div className="row" style={{ textAlign: 'center', paddingBottom: '20px', marginBottom: '20px' }} >
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="item active">
                <div style={{ display: 'flex', textAlign: 'center' }}>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city1} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city2} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Delhi</h3>
                  </Card>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city3} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                </div>
              </div>
              <div class="item">
                <div style={{ display: 'flex', textAlign: 'center' }}>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city2} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city3} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city4} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                </div>
              </div>
              <div class="item">
                <div style={{ display: 'flex', textAlign: 'center' }}>
                  <Card style={{ width: '30%', marginLeft: '10px', }}>
                    <img src={city3} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city4} className="ImgContainer" />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                  <Card style={{ width: '30%', marginLeft: '10px' }}>
                    <img src={city5} className="ImgContainer" /><br />
                    <h3 style={{ marginTop: '20px' }}>Jaipur</h3>
                  </Card>
                </div>
              </div>
            </div>
            <a class="right carousel-control" href="#myCarousel" data-slide="next" >
              <span class="glyphicon glyphicon-arrow-right" style={{
                marginLeft: '100px',
                color: '#000',
                border: '2px solid #ccc',
                borderRadius: '50%',
                height: '100px',
                padding: '30px',
                marginTop: '60px',
                fontSize: '50px',
              }}></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default CityContainer;
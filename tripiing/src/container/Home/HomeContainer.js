import React from 'react';
import HomeContainerAbstract from './HomeContainerAbstract';
import Header from '../Header';
import Footer from '../Footer';
import Search from '../SearchContainer';
import WhyUs from '../WhyUs';
import Work from '../Works';
import City from '../City';
import EarnWithUs from '../EarnWithUs';
import Subscribe from '../Subscribe';
import Mobile from '../Mobile';
import './styles.css';

class HomeContainer extends HomeContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <div className="headerContainer">
                        <div>
                            <Header></Header>
                        </div>
                        <div>
                            <Search></Search>
                        </div>
                    </div>
                    <WhyUs></WhyUs>
                    <EarnWithUs></EarnWithUs>
                    <Mobile></Mobile>
                    <Subscribe></Subscribe>
                    <Footer />
                </div>        
            </div>
        )
    }
}

export default HomeContainer;
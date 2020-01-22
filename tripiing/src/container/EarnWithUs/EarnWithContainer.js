import React from 'react';
import { Button } from 'antd';
import EarnWithUsContainerAbstract from './EarnWithUsAbstract';
import backimage from '../../images/backgroundimage.png';
import './styles.css';

class EarnWithUsContainer extends EarnWithUsContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="earn-withus-container">
                <div className="container earn-withus-wrapper">
                    <div className = "textWrapper">
                        <h2>Earn With Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                           </p>
                        <Button type="primary" size="large" >List your Car</Button>
                    </div>
                    <div>
                        <img src={backimage} />
                    </div>
                </div>
            </div>
        )
    }
}

export default EarnWithUsContainer;
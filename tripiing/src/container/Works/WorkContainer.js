import React from 'react';
import WorkContainerAbstract from './WorkContainerAbstract';
import './styles.css';

class WorkContainer extends WorkContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className = "workWrapper">
                <div className = "container workContainer">
                    <h1>How it Work</h1>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <p style={{ fontSize: '100px' }}><span className="glyphicon glyphicon-envelope"></span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: '100px' }}><span className="glyphicon glyphicon-envelope"></span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: '100px' }}><span className="glyphicon glyphicon-envelope"></span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: '100px' }}><span className="glyphicon glyphicon-envelope"></span></p>
                        </div>
                        <div>
                            <p style={{ fontSize: '100px' }}><span className="glyphicon glyphicon-envelope"></span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkContainer;
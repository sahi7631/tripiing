import React from 'react';

const Card = (props) => {
    return (
        <div className="row">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    <div class="panel panel-default">
                            <div class="panel-body">  <h1>{props.name}</h1></div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div class="panel panel-default">
                            <div class="panel-body">  <h1>{props.name}</h1></div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    <div class="panel panel-default">
                            <div class="panel-body">  <h1>{props.name}</h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;
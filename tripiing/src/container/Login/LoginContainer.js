import React from 'react';
import { Input, Button, Icon } from 'antd';
import Header from '../Header';
import Footer from '../Footer';

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <label> Mobile No: </label>
                            <Input size="large" placeholder="Mobile No." onChange = {(usr) => this.setState({ username: usr})} />
                            <label> Password: </label>
                            <Input size="large" placeholder="Password" onChange = {(pwd) =>  this.setState({ password: pwd})} />
                            <Button type="primary" style={{ marginTop: '30px', width: '100%' }} onClick= {this.onLogin}> Login</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '50px', marginTop: '20px' }}>
                            <div style={{ height: '60', border: '1px solid #fff', borderRadius: '5px', padding: '5px', width: '100%', background: '#DF063E', marginBottom: '10px' }}>
                                SignUp with Google
                        </div>
                            <div style={{ height: '60', color: '#ffff', border: '1px solid #fff', borderRadius: '5px', padding: '5px', background: '#3b5998', width: '100%', marginTop: '10px' }}>
                                Continues with FaceBook
                        </div>
                            <div style={{ color: '#000', marginLeft: '48px', marginTop: '10px' }}><span style={{}}>Forgot Password? </span></div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default LoginContainer;
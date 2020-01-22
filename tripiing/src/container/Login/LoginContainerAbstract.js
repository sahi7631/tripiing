import React from 'react';

class LoginContainerAbstract extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: '',
            passwordError: ''
        }
    }
    render() {
        return null;
    }
}

export default LoginContainerAbstract
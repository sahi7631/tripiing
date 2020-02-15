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
    onLogin = () => {
       let loginObj = {
           params: {
             username: this.state.username,
             password: this.state.password
           },
           sucessCb: (response) => {
               console.log("response !!!");
               console.log(response);
           },
           errorCb: (err) => {
             console.log("Error");
             console.log(err);      
           }
       }
       this.props.postRequest({key: "login", data: loginObj});
    }

    render() {
        return null;
    }
}

export default LoginContainerAbstract
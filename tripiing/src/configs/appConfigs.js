// const  baseUrl = "";

// const apiEndPoints = {
//     login: 'login',
//     register: 'register',
//     generateOtp: 'otp/generate-otp',
//     validateOtp: 'otp/validate-otp',
// }

const getApiEndPoint = (apiKey) =>  baseUrl + apiEndPoints[apiKey];

export default appConfigs =  { 
    getApiEndPoint
}; 
const  baseUrl = "";

const apiEndPoints = {
    login: 'login',
    register: 'register',
    generateOtp: 'otp/generate-otp',
    validateOtp: 'otp/validate-otp',
}

export const getApiEndPoint = (apiKey) => { 
    return baseUrl + apiEndPoints[apiKey];
}


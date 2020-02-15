import React from 'react'
const  baseUrl = "";
const apiEndPoints = {
    login: 'login',
    register: 'register',
    generateOtp: 'otp/generate-otp',
    validateOtp: 'otp/validate-otp',
}
export const getApiEndPoint = apiKey =>  baseUrl + apiEndPoints[apiKey];

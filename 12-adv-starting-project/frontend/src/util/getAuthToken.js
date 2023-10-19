import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const currentExpirationDate = localStorage.getItem('expirationDate');
    const expirationDate = new Date(currentExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export default function getAuthToken() {
    const token = localStorage.getItem('token');

    if(!token) {
      return null;  
    }
    
    const duration = getTokenDuration();

    if (duration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export function authLoader() {
    return getAuthToken(); 
}

export function checkAuthLoader() {
    const token = getAuthToken();

    if (!token) {
        return redirect('/auth');
    }

    return null;
}
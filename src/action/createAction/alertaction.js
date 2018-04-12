
 import {ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR} from './../actionTypes'


export function messagesuccess(message) {
    return { 
        type: ALERT_SUCCESS, 
        message: message
    };
}
 
export function messaageerror(message) {
    return { 
        type: ALERT_ERROR, 
        message: message
     };
}
 
export function messageclear() {
    return {
         type: ALERT_CLEAR }
}
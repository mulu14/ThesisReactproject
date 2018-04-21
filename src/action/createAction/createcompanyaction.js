import {REQUEST_COMPANY, RECEIVE_COMPANY, FETCH_SINGLE_COMPANY,
     CREATE_NEW_COMPANY, UPDATE_COMPANY, DELETE_COMPANY, } from './../actionTypes'


export const requestCompany =()=>{
    return { 
        type: REQUEST_COMPANY, 
        }
    }
export const receiveCompany =(data) =>{
    return{
        type: RECEIVE_COMPANY, 
        companies: data
    }
}

export const getsingleCompany =(data)=>{
    return {
        type: FETCH_SINGLE_COMPANY, 
        company: data
    }
}

export const createCompnay =(data)=>{
    return{
        type: CREATE_NEW_COMPANY, 
        newCompany: data
    }
}

export const updateCompany = (data)=>{
    return {
        type: UPDATE_COMPANY, 
        updatedCompany: data
    }
}
export const deleteCompany = (data) =>{
    return {
        type: DELETE_COMPANY, 
        data: data
    }
}
 
 import {CREATE_OFFERS, UPDATE_OFFERS, DELETE_OFFERS,GET_SINGLE_OFFER, GET_OFFERS } from './../actionTypes'


 export const createOffer =(data)=>{
     return{
        type: CREATE_OFFERS,
        offer : data
       }
 }
 export const updateOffer =(data)=>{
     return{
         type: UPDATE_OFFERS,
         updatedOffer: data,
     }
 }

 export const getallOfffers =(data)=>{
     return{
         type: GET_OFFERS, 
         offers: data
     }
 }

 export const deletOffer =(id)=>{
    return{
        type: GET_OFFERS, 
        id: id
    }
}

export const getsingleOfffer =(data)=>{
    return{
        type: GET_SINGLE_OFFER, 
        offer: data
    }
}
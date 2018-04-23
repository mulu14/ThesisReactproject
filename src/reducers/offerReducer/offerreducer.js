import {CREATE_OFFERS, UPDATE_OFFERS, DELETE_OFFERS,GET_SINGLE_OFFER, GET_OFFERS } from './../../action/actionTypes'


const offerReducer = (state={}, action) =>{
    switch(action.type){
        case CREATE_OFFERS: 
        return{
            ...state,
            offer: action.offer
        }
        case GET_OFFERS:
        return{
            ...state,
            offers: action.offers.offers
        }
        case UPDATE_OFFERS: 
        return{
            ...state,
            updatedOffer: action.updatedOffer
        }
        case GET_SINGLE_OFFER:
        return {
            ...state,
            singleOffer: action.offer
        }
        case DELETE_OFFERS:
        return{
            ...state,
            offer: action.offer
        }
        default: 
        return state
    }
  
}

export default offerReducer; 





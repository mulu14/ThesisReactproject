
const initialState = {  
    candidates: [],
    companies: [], 
    offers: [], 
    singleCandidate: [],
    createNewCandidate: {
      id: '',
      title: '',
      body: ''
    }, 
    
    isFetching: false,
    didInvalidate: false,
    candidateWaitingApproval: null, 
    candidatePublished: null, 
    candidateNotPublished: null, 
    companyPublished: null, 
    companyWaitingApproval: null, 
    loggingIn: '',
    error: '',
     user: {
     email: '',
     password: ''
     }, 
     message :'',
     loading: '',
     logout : '',
    

  }

  export default initialState;
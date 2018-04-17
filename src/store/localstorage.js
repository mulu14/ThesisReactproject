

export const loadeState = ()=>{
    try{
        const seralizedState = localStorage.getItem('user'); 
        if(seralizedState ===null){
            return undefined; 
        }
        return JSON.parse(seralizedState); 
    } catch(error){
        return undefined; 
    }
}

export const saveState = (user) =>{
    try{
        const serializeState = JSON.stringify(user); 
        localStorage.setItem('user', serializeState); 
    } catch(error){
        return undefined; 
    }
}
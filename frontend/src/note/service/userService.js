import userApi from "../api/userApi"

const BASE_URL = '';

export const findAll = async() =>{
    try {
        const response = await userApi.get(BASE_URL);
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }    
}


export const save = async() =>{
    
    try {
        
        
    } catch (error) {
        console.log(error);
        throw error;
    }    
}



export const update = () =>{
    try {
        
    } catch (error) {
        console.log(error);
        throw error;
    }    
}


export const remove = () =>{
    try {
        
    } catch (error) {
        console.log(error);
        throw error;
    }    
}
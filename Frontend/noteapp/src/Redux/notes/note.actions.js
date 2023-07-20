import { useSelector } from "react-redux"
import axios from "axios"
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.type"
import { BASE_URL } from "../../constants/config"
import { store } from "../store"



export const getNotes = () => async(dispatch)=> {

    const {token} = store.getState().userReducer
    dispatch({type : GET_NOTES_LOADING})
    try {
        
        const res = await axios(BASE_URL+"/note",{
            method :"get",
            headers: {
                Authorization:token
            }
        })

        const {status, message, data} = res.data
        console.log(message,data)

        if(status  ==1){
            dispatch({type: GET_NOTES_SUCCESS, payload:data})
        }else{
            dispatch({type: GET_NOTES_ERROR})
        }

        
    } catch (error) {
        dispatch({type: GET_NOTES_ERROR})
    }
}

export const createNotes = (obj) => async(dispatch)=> {

    const {token} = store.getState().userReducer
    dispatch({type :CREATE_NOTES_LOADING})
    try {
        
        const res = await axios(BASE_URL+"/note/create",{
            method :"post",
            data:obj,
            headers: {
                Authorization:token
            }
        })

        const {status, message} = res.data
        console.log(message)

        if(status  ==1){
            dispatch({type: CREATE_NOTES_SUCCESS})
        }else{
            dispatch({type: CREATE_NOTES_ERROR})
        }

        
    } catch (error) {
        dispatch({type: CREATE_NOTES_ERROR})
    }
}


export const deleteNotes = (id) => async(dispatch)=> {

    const {token} = store.getState().userReducer
    dispatch({type :DELETE_NOTES_LOADING})
    try {
        
        const res = await axios(BASE_URL+"/note/create",{
            method :"delete",
            headers: {
                Authorization:token,
                id:id
            }
        })

        const {status, message} = res.data
        console.log(message)

        if(status  ==1){
            dispatch({type: DELETE_NOTES_SUCCESS})
        }else{
            dispatch({type: DELETE_NOTES_ERROR})
        }

        
    } catch (error) {
        dispatch({type: DELETE_NOTES_ERROR})
    }
}

export const updateNotes = (id,obj) => async(dispatch)=> {

    const {token} = store.getState().userReducer
    dispatch({type :UPDATE_NOTES_LOADING})
    try {
        
        const res = await axios(BASE_URL+"/note/create",{
            method :"patch",
            data:obj,
            headers: {
                Authorization:token,
                id:id
            }
        })

        const {status, message} = res.data
        console.log(message)

        if(status  ==1){
            dispatch({type: UPDATE_NOTES_SUCCESS})
        }else{
            dispatch({type: UPDATE_NOTES_ERROR})
        }

        
    } catch (error) {
        dispatch({type: UPDATE_NOTES_ERROR})
    }
}
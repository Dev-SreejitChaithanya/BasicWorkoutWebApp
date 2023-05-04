import {createContext,useReducer} from 'react'

//Create new context and store it in a constant
export const WorkoutsContext = createContext();

//when a dispatch function is called , the reducer function is invocked,and its passes the action into the reducer function 
//dispatch(action) for example would be dispatch({type:'SET_WORKOUTS',payload:[{},{}]})
export const workoutsReducer = (state,action)=>{
    switch(action.type){
        case'SET_WORKOUTS':
        return{
            workouts:action.payload
        }
        case'CREATE_WORKOUT':
        return{
            workouts:[action.payload, ...state.workouts]
        }
        case'DELETE_WORKOUT':
        return{
            workouts:state.workouts.filter((w)=>w._id!==action.payload._id)
        }
        default:
            return state
    }
}

//This provides the context we have created to the which components it require,here it is APP
export const WorkoutsContextProvider=({children})=>{

    
    const[state,dispatch]=useReducer(workoutsReducer,{workouts:null})
    
return(<WorkoutsContext.Provider value={{...state, dispatch}}> 
        {children}
    </WorkoutsContext.Provider>)
}
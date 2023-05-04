import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

//The custom hook to use WorkoutsContext
export const useWorkoutsContext =()=>{
    //this context variable now has the dispatch function and 
    //the state of the WorkoutsContext 
    const context = useContext(WorkoutsContext)
    if(!context){throw Error("useWorkoutsContext must be used inside an WorkoutsContextProvider")}
    return context
}
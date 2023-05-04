import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";



function Home() {
  //we are now using the global state using the context 
  //instead of the local state updation by replacing the 
  //useState to useContext
  //this was useState : const [workouts, setWorkouts] = useState(null);
  const {workouts,dispatch}=useWorkoutsContext()
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        //replaced the setState:setWorkouts(json) with dispatch;
        dispatch({type:"SET_WORKOUTS",payload:json})        
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            return <WorkoutDetails key={workout._id} workout={workout} />;
          })}
      </div>
      <WorkoutForm/>
    </div>
  );
}

export default Home;

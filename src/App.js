import "./App.css";
import Exercise from "./components/Exercise/Exercise";

function App() {
  const handleToDoList = () => {
    console.log('btn click');
  }
  return (
    <div className="">
      <Exercise></Exercise>
      
    </div>
  );
}

export default App;

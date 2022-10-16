import Title from "./components/Title";
import Cam from './right_angle/templates/index';
import git from './assets/gitlogo.png'
import './App.css'

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return <div className="bg-gradient-to-tr from-indigo-300 to-purple-400 animate-gradient-xy grid place-items-center h-screen">
    <Title />
    <Cam />
    <button onClick={refreshPage}>
    Calibrate
    </button>
    <a href="https://github.com/ImaadJ10/RightAngle" target="_" className="grid">
    <img class='github' src={git} alt="Github" className="h-1/12 w-1/12 place-self-end" />
    </a>
  </div>;
}

export default App;

import Title from "./components/Title";
import Cam from './server/templates/index';
import git from './assets/githublogo.png'
import './App.css'

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return <div className="bg-gradient-to-tr from-indigo-300 to-purple-400 animate-gradient-xy grid place-items-center h-screen">
    <Title />
    <Cam />
    <button className="place-self-center" onClick={refreshPage}>
    Calibrate
    </button>
    <a href="https://github.com/ImaadJ10/RightAngle" target="_" className="grid">
    <img class='github' src={git} alt="Github"/>
    </a>
  </div>;
}

export default App;

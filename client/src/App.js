import Title from "./components/Title";
import Cam from './right_angle/templates/index';
import git from './assets/gitlogo.png'

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return <div className="bg-gradient-to-tr from-indigo-300 to-purple-400 animate-gradient-xy grid place-items-center h-screen">
    <Title />
    <div className="w-1/2 h-auto grid place-items-center">
      <Cam />
    </div>
    <button onClick={refreshPage} className="inline-block px-6 py-2.5  bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
    Calibrate
    </button>
    <a href="https://github.com/ImaadJ10/RightAngle" target="_" className="grid">
    <img src={git} alt="Github" className="h-1/12 w-1/12 place-self-center" />
    </a>
  </div>;
}

export default App;

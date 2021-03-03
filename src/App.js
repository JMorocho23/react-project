import './App.css';
import Navbar from './components/Navbar';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
          <Navbar></Navbar>
          <Schedule></Schedule>
      </div>
    </div>
  );
}

export default App;

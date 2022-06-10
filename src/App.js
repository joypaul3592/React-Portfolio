import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App max-w-7xl mx-auto relative">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;

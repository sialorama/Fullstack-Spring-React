import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navbar from './layout/Navbar';

function App() {

  return (

    <div className='App'>
    <Navbar />
      <Home />

    </div>
  );
}

export default App;

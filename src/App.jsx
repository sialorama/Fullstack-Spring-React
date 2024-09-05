import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navbar from './layout/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import { AddUser } from './users/AddUser';



function App() {

  return (

    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element ={<Home/>} />
          <Route exact path="/adduser" element ={<AddUser/>} />
          <Route exact path="/edituser" element ={<EditUser/>} />
          <Route exact path="/viewuser" element ={<ViewUser/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

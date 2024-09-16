import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Utilisation du chemin correct
import Home from './pages/Home';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import DeleteUser from './users/DeleteUser';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
          <Route path="/deleteuser/:id" element={<DeleteUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

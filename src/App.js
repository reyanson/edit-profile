import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';




function App() {
 

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/adduser' element={<AddUser/>} />
        </Routes>
      </Router>





      {/* <User /> */}
      {/* <Settings /> */} 
      

    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import LoginForm from './LoginForm';
import Addmembers from './components/Addmembers';
import Home from './components/Home';
import MembersList from './components/MembersList';
import Update from './components/Update';


function App() {
  return (
   
    <div>
      <Navbar />
      <div className='content'>
        
           
          <Routes>
          
          {/* <Route path="/LoginForm" element={<LoginForm/>}/> */}
          <Route path="/Addmembers" element={<Addmembers />} />
          <Route index element={<Home />} />
          
          <Route path="/MembersList" element={<MembersList />} />
          <Route path="/update/:id" element={<Update />} />
          </Routes>
        
      </div>
    </div>

  );
}

export default App;
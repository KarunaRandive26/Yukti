import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Foot from './pages/foot';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';
import { createContext, useReducer } from 'react';
import { initalState, reducer } from './reducer/Usereducer';
export const Usercontext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initalState)
  return (
    <>
      <Usercontext.Provider value={{ state, dispatch }}>
        <div className='main'><div className='App'>
          <div className='custom-nav'>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />

          </Routes>
          <Foot />
        </div>
        </div>
      </Usercontext.Provider>
    </>
  );
}

export default App;

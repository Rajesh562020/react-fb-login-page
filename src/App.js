// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { WebRoutes } from './routes.jsx';
import Login from '../src/components/login/Login.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
      <Route path={WebRoutes.LOGIN} element={<Login/>}/>


      </Routes>
    </>
  );
}

export default App;

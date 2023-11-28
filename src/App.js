// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { WebRoutes } from './routes.jsx';
import Login from '../src/components/login/Login.jsx';

function App() {
  return (
    <>
      <Routes>
      <Route path={WebRoutes.LOGIN} element={<Login/>}/>


      </Routes>
    </>
  );
}

export default App;

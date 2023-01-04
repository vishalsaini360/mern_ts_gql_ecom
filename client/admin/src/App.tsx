import './App.css';
import Header from './Components/SheardComponents/Header/Header';
import Login from './Components/Login/Login';
import SideBar from './Components/SideBar/SideBar';
import Dashboard from './Components/Dashboard/Dashboard';
import { useRoutes } from 'react-router';
import { Routes } from './Routes';


function App() {
  const element = useRoutes(Routes)
  return (
    <>
      <SideBar/>
      <Header />
      <Dashboard/>
      {element}
      {/* <Login /> */}
    </>
  );
}

export default App;

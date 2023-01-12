import './App.css';
import {useEffect} from 'react';
import Header from './Components/SheardComponents/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import { useRoutes } from 'react-router';
import { Routes } from './Routes';
import Footer from './Components/SheardComponents/Footer/Footer';
import { useLocation,useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  const element = useRoutes(Routes)
  const location = useLocation();
  // console.log('element',location.pathname)

  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate('/Admin')
    }
  },[])

  return (
    <>
    {
      (location.pathname === '/Admin' || location.pathname === '/admin' || location.pathname === '/')?
          <>
          {element}
          </>
      :
      <>
        {
          <>
            <SideBar/>
            <Header />
            {element}
            <Footer/>
          </>
        }
          
      </>
    }
    </>
  );


}

export default App;

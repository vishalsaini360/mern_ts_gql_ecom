import HeaderWrapper from "./components/shared/Header/HeaderWrapper";
import Footer from "./components/shared/Footer/Footer";

import {routes} from './components/Routes'
import { useRoutes } from 'react-router'
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <HeaderWrapper/>
      {element}
      <Footer/>
    </>
  );
}

export default App;

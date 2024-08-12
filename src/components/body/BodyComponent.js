//import Menu from "./Menu";     //15. Got rid of importing the Menu because now we're gonna be adding router
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';

const BodyComponent = () => {
  return (
    <div>
      {    /*<Menu/>    ####Step 16. Since we are adding router. Hence no need to pass Menu component here. Rather we will now try to establish Home,About, Contact and all     */} 
      <Routes>
        <Route path='/' element={<Home/>} />     {/* #STEP 19=== Added Route ..... then go menu*/}
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div> //Now Go to NavigationComponent;
  )
}

export default BodyComponent;
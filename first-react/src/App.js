import Home from "./home";
import About from "./about";
import Head from "./head";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Cake from "./cake";
import CakeOrders from "./cakeOrder";
function App() {
  return(
    <Router>
         <Head/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path ='/cakes/:id' element={<Cake/>}/>
        <Route path ='/orders' element ={<CakeOrders/>}/>
       </Routes>
    </Router>
) 

}

export default App;

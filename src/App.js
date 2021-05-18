// // ---------------------------------class - 3 13/05/2021-------------------------------------
import './App.css';
//  creating and importing components
import {Home} from './Home';
// curly btraces for the components which are not exported deafault
import Nav from './Nav';
import Contacts from './Contacts';
import Service from './Service';
import Card from './Card';
// importing react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
// importing images
import img1 from './img-1.png';
import img2 from './img-2.jpg';
import img3 from './img-3.png';

const arr =[
  {
    imgsrc:img1,
    title  : "Bilal"
  },
  {
    imgsrc:img2,
    title  : "Sourav"
  },
  {
    imgsrc:img3,
    title  : "rishab"
  },
]
function App(){
  
  return (
    
    // <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    <>
    {/* using components */}
    // // ---------------------------------class - 4 15/05/2021-------------------------------------

    <Router>
      <Nav/>
      <Switch>
        <Route exact path = "/">
         <Home 
         heading = "hello"
         />
         <Home
         heading = "world"
         />
         {
          arr.map((cur,index)=>{
            return (
            <Card
           imgsrc={cur.imgsrc}
            titles={cur.title}
            
            />)
          })

         }
         
        
        </Route>
        <Route exact path = "/contact">
        <Contacts/>
        </Route>
        <Route exact path = "/service">
        <Service/>
        </Route>
      </Switch>

    </Router>
    </>
  
    
  );
}

export default App;

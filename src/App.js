// // ---------------------------------class - 3 13/05/2021-------------------------------------
import './App.css';
//  creating and importing components
import {Home} from './Home';
// curly btraces for the components which are not exported deafault
import Nav,{Name} from './Nav';
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
    <Nav/>
    <Home/>
    <Name/>
    </>
  
    
  );
}

export default App;

// // ---------------------------------class - 3 13/05/2021-------------------------------------
// created nav component use className istead of class
import React from 'react';
import {Link} from 'react-router-dom';
const Nav =()=>{
    return(
        <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Service</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</>
    )
}
// creating variables and export to another components
// var Name = "Bilal";
// var Surname = "khalid";
// export {Name,Surname , Name1};
export default Nav;
// var Name1 =()=>{
//   return "Sourav"
// }


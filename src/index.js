// // ---------------------------------class - 1  11/05/2021-------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
import App from './App';  
// import reportWebVitals from './reportWebVitals';

// // creating object to use css---------

// // const heading_style = {
// //   color:"teal",
// //   fontSize:"80px"
// // }

// // define variable outside render always -------

// var day = "monday"
// // if(day=="sunday"){
// //   var message = "go to school"
// // }
// // else{
// //   message = " there is holiday"
// // }
  

// ReactDOM.render(
//   // use react fregments to wrap up all of your code inside <> --   </>  ------
//   <>
//     <h1 style ={heading_style}>Rishab</h1>

//      {/* use {} for writing js inside jsx remember one thing you cant define variables in it  ------*/}
//      {/* and you cant use if else there but we can use ternary operator ------- */}

//     <h1>prathamesh {
//     day=="sunday"? "there is a holiday" : "go to school"
//       }</h1>


//   </>
//   ,
//   document.getElementById('root')
  
// );


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

// // ---------------------------------class - 2 12/05/2021-------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';

// creating array of an object ---------------------------------
// var arr = [
//     {    id:0,
//         Name: "Sorav",
//         Lname:"dey"
//     },
//     {     id:1,
//         Name: "Ravindra",
//         Lname:"pratap"
//     },
//     {     id:2,
//         Name: "Sorav",
//         Lname:"dey"
//     },
// ]

// // adding one array into other
// var brr = [
//     ...arr,
//     {  id:3,
//         Name: "Bilal",
//         Lname:"khalid"
//     },
//     { id:4,
//         Name: "Ravindra",
//         Lname:"pratap"
//     },
//     { id:5,
//         Name: "Rishab",
//         Lname:"Rajput"
//     },
// ]

// var d = new Date().toLocaleDateString();
// var e = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
{/* use array.map func to print array ---------------------- */}
 {/* {
   brr.map((cur)=>{
     return <h1 key={cur.id}>{cur.Name}</h1>
   })
 } */}
     <App/>
     </>
    //  using app component from app.js
      ,document.getElementById('root')
)
// // ---------------------------------class - 3 13/05/2021-------------------------------------
//// go to App.js

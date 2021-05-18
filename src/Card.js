// // ---------------------------------class - 5 17/05/2021-------------------------------------
import React from 'react';
const Card = (props) => {
    return (
        <>
        <div class="card" style={{width: "18rem"}}>
  <img src= {props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.titles}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</>
    )
}

export default Card

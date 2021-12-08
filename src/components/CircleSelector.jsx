import React, { useState } from 'react';



const CircleSelector = (props) => {

  const [clicked, setClicked] = useState(true)

  

  return (
    <div className={clicked ? "CircleSelector selected" : "CircleSelector"}>
      {props.circles.map((circle, idx) =>
        <>
          <button
            onClick={() => props.handleSelected(idx)}
            className={props.circleSelected === idx ? "CircleSelector selected" : "CircleSelector"}
          >
            {props.circleSelected === idx ? `Circle ${circle} selected` : `select circle ${circle}`}</button>
        </>
      )}
    </div >
  );
}

export default CircleSelector;


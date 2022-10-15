import React, {useState } from 'react'
import './BodyPart.css'
import { Link } from "react-router-dom";
import cap  from '../images/cap.png';

const BodyPart = (props) => {
  const [count, setCount] = useState(0)
  
  const removeCountHandler = () => {
    if(count === 0){
      return;  
    }
    setCount(count - 1);
    props.setCartCount(count - 1)
  };
  const addCountHandler = () => {
    setCount(count + 1);
    props.setCartCount(count + 1)
  };
 

  return (
    <div className='container-fluied mt-5 float-right' style={{height:'67vh'}}>
    <div className="row">
    <div className="col-6 text-center mt-5">
      <img src={cap} alt="" className='img-fluid' />
    </div>
    <div className="col-6 mt-2">
    <span className='MERCH'>OFFICIAL MERCH</span><br/>
    <span className='name'>CAP</span><br/>
    <div className='price'>300 $GOD </div><br/>
    <p className='para'>Nullam imperdiet auctor lacinia. Donec quam est, porta nec felis et,<br/>
     sollicitudin tristique tortor. Nunc ac feugiat tortor. Quisque elementum <br/>
     nec metus sit amet tincidunt. Suspendisse ut blandit lorem, eget gravida.
   </p><br/>
      <div >
        <button className='countBtn px-3 border-right-0' onClick={removeCountHandler}>-</button>
        <button className='countBtn px-3 '>{count}</button>
        <button className='countBtn px-3 border-left-0 ' onClick={addCountHandler}>+</button>
      </div>
      <br />
      <Link to="information">
      <button className='atc px-4 py-1 '>ADD TO CART</button>
      </Link>
    </div>
  </div>
    </div>
  )
}

export default BodyPart

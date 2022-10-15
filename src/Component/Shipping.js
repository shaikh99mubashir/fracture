import React, { useState } from 'react'
import './Information.css'
import cap  from '../images/cap.png';
import { Link } from "react-router-dom";

const Shipping = () => {
  
  return (
    <div className='container' style={{height:'77vh'}}>
        <div className='d-flex'>
            <p style={{fontSize:12, fontWeight:400}}>CART<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
            <Link to={'/information'} style={{textDecoration:'none'}}>
            <p style={{fontSize:12, fontWeight:400}}>INFORMATION<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
            </Link>
            <p style={{fontSize:12, fontWeight:400, borderBottom:"1px solid #8A909D"}}>SHIPPING</p><i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10, paddingTop:6}}></i>
            <p style={{fontSize:12, fontWeight:400}}>PAYMENT</p>
        </div>
        <div className='row'>
            <div className="col-6" style={{borderRight:"2px solid #8A909D"}}>
            <p style={{fontWeight:700}}>Shipping</p>
              <div className='boxex d-flex'>
              <input type="radio" name='fstopt' value='1' className='mt-2 mx-2 option-input radio ' />
              <label className='labltxt mt-2'>Standard - 2 to 8 business days</label>
              </div>
              <div className='boxex mt-3 d-flex'>
              <input type="radio" name='fstopt' value='1'  className='mt-2 mx-2 option-input radio ' />
              <label className='labltxt mt-2'>Express - 1 to 4 business days</label>
              </div>
              <br/>
              <Link to={'/payment'}>
              <button className='px-4 py-1 me-1' style={{background:'none', borderColor:"#8A909D", fontWeight:700}}>Continue</button>
              </Link>
              <Link to={'/information'} style={{textDecoration:'none'}}>
              <span className='dropDownMenu'>Return to Information</span>
              </Link>
            </div>
            <div className="col-6 text-center mt-5">
              <div className="row ">
                <div className="col-1">
                </div>
                <div className="col-3">
                <img src={cap} alt="" className='img-fluid' width={100} height={70} />
                </div>
                <div className="col-4">
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'start'}}>
                <span className='titleTXT'>CAP</span>
                <span className='decpTXT' >BLACK/RED</span>
                </div>
                </div>
                <div className="col-3">
                <span  className='titleTXT'>300 $GOD</span>
                </div>
              </div>
              <div className='mt-4 ms-5 text-center' style={{width:'85%', borderTop:"1px solid #8A909D", borderBottom:"1px solid #8A909D"}}>
                  <div className="row mt-3">
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-start', alignItems:'start'}}>
                      <span className='STOTL'>SUBTOTAL</span>
                    </div>
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-end', alignItems:'end'}}>
                      <span className='STOTLAMT'>300 $ GOD</span>
                    </div>
                  </div>               
                  <div className="row my-3">
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-start', alignItems:'start'}}>
                      <span className='STOTL'>SHIPPING</span>
                    </div>
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-end', alignItems:'end'}}>
                      <span className='STOTL'>80 $ GOD</span>
                    </div>
                  </div>               
              </div>
              <div className='ms-5' style={{width:'85%'}}>
                  <div className="row my-3">
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-start', alignItems:'start'}}>
                      <span className='STOTLAMT'>TOTAL</span>
                    </div>
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-end', alignItems:'end'}}>
                      <span className='TOTLAMT'>380 $ GOD</span>
                    </div>
                  </div>               
              </div>
            </div>
        </div>
    </div>
  )
}

export default Shipping

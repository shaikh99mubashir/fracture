import React, { useState } from 'react'
import './Information.css'
import { Link, useNavigate } from "react-router-dom";
import cap  from '../images/cap.png';

const Information = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false)
  const [firstName, setName] = useState('');
  const [firstNameError, setNameError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState(false);
  const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const firstNameRegex = /^[A-Za-z]+$/; 
  const lastNameRegex = /^[A-Za-z]+$/; 
  const phoneNo = /^[0-9]*$/;
  const navigate = useNavigate();
  const handelEmail =(e)=>{
    let email = e.target.value;
    if(!email.match(emailRegex)){
        setEmailError(true)
      }
      else{
      setEmailError(false)

    }
    console.log(email)
    setEmail(email)
  }
  const handelFirstName =(e)=>{
    let firstName = e.target.value;
    if(!firstName.match(firstNameRegex)){
      setNameError(true)
      }
      else{
        setNameError(false)
    }
    setName(firstName)
  }
  const handelAddress =(e)=>{
    let address = e.target.value;
    if(address.length > 15){
      setNameError(true)
      }
      else{
        setNameError(false)
    }
    setAddress(address)
  }
  const handelPhone =(e)=>{
    let phone = e.target.value;
    if(!phone.match(phoneNo)){
      setPhoneError(true)
      }
      else{
        setPhoneError(false)
    }
    setPhone(phone)
  }

  const handelSubmit = (e) =>{
    console.log("email",email)
    console.log("submit handler working")
    e.preventDefault();
    if(!email.match(emailRegex)){
        setEmailError(true)
      }
      else{
      setEmailError(false)
    }
    if(!firstName.match(firstNameRegex)){
      setNameError(true)
      }
      else{
        setNameError(false)

    }
    if(address.length > 15){
      setAddressError(true)
      }
      else{
        setAddressError(false)
    }
    if(!phone.match(phoneNo)){
      setPhoneError(true)
      }
      else{
        setPhoneError(false)
    }

    if((!email.match(emailRegex)) || (!firstName.match(firstNameRegex)) || (address.length > 15) || (!phone.match(phoneNo)))
    {
      navigate('/shipping');
    }
    
  }

  
  return (
    <div className='container' style={{height:'100vh',}}>
        <div className='d-flex'>
            <p style={{fontSize:12, fontWeight:400}}>CART<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
            <p style={{fontSize:12, fontWeight:400, borderBottom:"1px solid #8A909D", cursor:'pointer'}} onClick={handelSubmit} >INFORMATION</p><i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10, paddingTop:6}}></i>
            <p style={{fontSize:12, fontWeight:400}}>SHIPPING<i class='fas fa-greater-than' style={{fontSize:10,paddingLeft:10,paddingRight:10}}></i></p>
            <p style={{fontSize:12, fontWeight:400}}>PAYMENT</p>
        </div>
        <div className='row'>
            <div className="col-6" style={{borderRight:"2px solid #8A909D"}}>
            <p style={{fontWeight:700}}>Contact Information</p>
              {emailError? <span style={{color:"red", fontSize:10}}>Invalid Email</span> : null}
              <div className='boxex'>
                <input type="text" value={email} onChange={handelEmail} className='mt-2 mx-2 inputemil' required  placeholder='Email *' style={{border:'none', outline:'none',background:'transparent'}} />
              </div>
              <div className='boxex mt-2'>
              <p className='ms-2 mt-1 txt' >Country/Region *</p>
              <select name="" id="" className='dropDownMenu'>
              <option value="None" className='options'>--select--</option>
              <option value="volvo" className='options'>Austrila</option>
              <option value="volvo" className='options'>Austrila</option>
              <option value="volvo" className='options'>Austrila</option>
              <option value="volvo" className='options'>Austrila</option>
              </select>
              </div>
              {firstNameError ? <span style={{color:"red", fontSize:10}}>Invalid Input</span> : null}
              <div className='d-flex' style={{gap:15}}>
                <div className='boxexf mt-2'>
                  <input type="text" value={firstName} onChange={handelFirstName} required className='mt-2 mx-2 inputemilf' placeholder='First Name *' style={{border:'none', outline:'none',background:'transparent'}} />
                </div>
                <div className='boxexf mt-2'>
                  <input type="text" className='mt-2 mx-2 inputemilf' placeholder='Last Name *' required style={{border:'none', outline:'none',background:'transparent'}} />
                </div>
              </div>
              <div className='boxex mt-2'>
                <input type="text" className='mt-2 mx-2 inputemil' placeholder='Company [Optional] *' style={{border:'none', outline:'none',background:'transparent'}} />
              </div>
              { addressError? <span style={{color:"red", fontSize:10}}>Invalid Inputs</span> : null}
              <div className='boxex mt-2'>
                <input type="text" className='mt-2 mx-2 inputemil' value={address} onChange={handelAddress} placeholder='Adress *' required style={{border:'none', outline:'none',background:'transparent'}} />
              </div>
              <div className='boxex mt-2'>
                <input type="text" className='mt-2 mx-2 inputemil' placeholder='Appartment Site Etc ' style={{border:'none', outline:'none',background:'transparent'}} />
              </div>
              {phoneError ? <span style={{color:"red", fontSize:10}}>Invalid Phone No</span> : null}
              <div className='boxex mt-2'>
                <input type="text" className='mt-2 mx-2 inputemil' required value={phone} onChange={handelPhone} placeholder='03000000000 *' style={{border:'none', outline:'none',background:'transparent'}} />
              </div>
              <br/>
              <br/>

              <button className='px-4 py-1' type='submit' value='Submit' onClick={handelSubmit} style={{background:'none', borderColor:"#8A909D"}}>Continue</button>
              

              <br/>
              <br/>
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
                      <span className='STOTL'>CALCULATED AT NEXT STEP</span>
                    </div>
                  </div>               
              </div>
              <div className='ms-5' style={{width:'85%'}}>
                  <div className="row my-3">
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-start', alignItems:'start'}}>
                      <span className='STOTLAMT'>TOTAL</span>
                    </div>
                    <div className="col-6" style={{display:'flex', justifyContent:'flex-end', alignItems:'end'}}>
                      <span className='TOTLAMT'>300 $ GOD</span>
                    </div>
                  </div>               
              </div>
            </div>
        </div>
    </div>
  )
}

export default Information
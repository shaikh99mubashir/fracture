import React from 'react'
import insta  from '../images/insta.png';
import twiter  from '../images/twiter.png';
import discord  from '../images/discord.png';

const Footer = () => {
  return (
    <div className='container-fliied p-1' style={{backgroundColor:'black'}}>
    <center>
    <div>
    <img src={insta} alt="" className='pe-3'/>
    <img src={twiter} alt="" className='pe-3'/>
    <img src={discord} alt="" className=''/>
    </div>
    <br/>
    © 2022 The Fracture | All rights reserved
    </center>
    </div>
  )
}

export default Footer
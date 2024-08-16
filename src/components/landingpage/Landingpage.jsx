import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css';
import { assests } from '../../assets/assests';


const Landingpage = () => {
//   const [clicked, setClicked] = useState(false);
 const navigate=useNavigate();
  function navigation(){
    navigate("./main")
  }

  function navigation1(){
    navigate("./main1")
  }

  return (
    <div className='main1'>
      <div className="nav1">
        <h2 className='span1'><span>R-Verse</span></h2>
        <img className='nav-img' src={assests.user_icon} alt="User Icon" />
      </div>
      <div className="main-container1">
        <p><span>Hello, R-Versian</span></p>
        <p className='detail-greet'>Welcome to the Rajnish-Verse, one stop AI Solution...</p>
      </div>
      <div className="cards" style={{justifyContent:'space-around'}}>
        <div className="card" onClick={navigation}>
          <p style={{fontSize:23}}>Ask your Question with:</p>       
          <h2 className='link'>R-Verse GPT</h2>
        </div>
        <div className="card" onClick={navigation1} >
          <p  style={{fontSize:23} }>Generate Your AI image with:</p>
         <h2 className='link'>R-verse image Generator</h2>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;

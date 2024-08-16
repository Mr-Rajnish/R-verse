import React, { useContext } from 'react'
import './Main.css'
import { assests } from '../../assets/assests'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
    const navigate=useNavigate();
     function navigation2(){
        navigate("/")
     }
  return (
    <div className='main'>
      <div className="nav">
        
        <p className='span1'><span>R-Verse</span></p>
        <div style={{display:'flex',gap:10}}>
        <img  className='back-button' onClick={navigation2} src="https://static.thenounproject.com/png/251451-200.png" />
        <img src={assests.user_icon} alt="" />
        </div>
        

      </div>
      <div className="main-container">

        {!showResult?<> <div className="greet">
            <p><span>Hello, Mates.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards1">
            <div className="card1">
               <p>Briefly summarize this concept : How AI is dangerous</p>       
               <img src={assests.bulbsymbol} alt="" />
            </div>
            <div className="card1">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assests.compasssymbol} alt="" />
            </div>
            <div className="card1">
                <p>Suggest team bonding Fun activities for Office</p>
                <img src={assests.messagesymbol} alt="" />
            </div>
            <div className="card1">
                <p>Improve the readability of the follwing code</p>
                <img src={assests.fragmenttagsymbol} alt="" />
            </div>
        </div></>: <div className='result'>
                 <div className="result-title">
                    <img src={assests.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                 </div>
                 <div className="result-data">
                    <img src={assests.starsymbol} alt="" />
                    {loading?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    
                 </div>
             </div>}

       

        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input}  type="text" placeholder='jo puchna h pucho..'/>
                <div><img src={assests.gallery_icon} alt="" /><img src={assests.voiceassistant} alt="" /> {input?<img onClick={()=>onSent()} src={assests.sendsymbol} alt="" />:null}</div>
            </div>
            <p className='bottom-info'>
                R-verse may display inaccurate info, including about people , so double-check its responses . Your privacy and R-verse Apps
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
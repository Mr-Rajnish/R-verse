import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assests } from '../../assets/assests'
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended,setextended]=useState(false);
    const {onSent,prevPrompts,setRecentPrompt,newChat}=useContext(Context)

    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt)
       await onSent(prompt)
    }

  return (
    <div className='sidebar'>
        <div className="top">
          <img onClick={()=>setextended(prev=>!prev)} className='menu' src={assests.menusymbol} alt="" />
          <div onClick={()=>newChat()} className='new-chat'>
             <img  style={{margin:0}} src={assests.addsymbol} alt=''/>
            {extended?<p>New Chat</p>:null}
          </div>
          {extended?<div className='recent'>
            <p className="recent-title"  style={{color:'black'}}> Recent </p>
            {prevPrompts.map((item,index)=>{
                return (
                    <div onClick={()=>loadPrompt(item)} className="recent-entry">
                <img  style={{margin:0}} src={assests.messagesymbol} alt="" />
                <p>{item.slice(0,15)}...</p>
            </div>
                )
            })}
            
        </div>:null}
    
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry  quest"  style={{margin:0}}>
                <img  style={{margin:0}} src={assests.questionmarksymbol} alt="" />
               {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img  style={{margin:0}} src={assests.timerwatch} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img  style={{margin:0}} src={assests.settingsymbol} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
import React, { useState } from 'react';
import './Main1.css'
import { assests} from '../../assets/assests';
import { useNavigate } from 'react-router-dom';



const Main1 = () => {


    const navigate=useNavigate();
     function navigation3(){
        navigate("/")
     }
  const [inputText, setInputText] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const token = "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";

  const query = async () => {
    setImageSrc('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif');
    
 
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/Melonie/text_to_image_finetuned",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ "inputs": inputText }),
        }
        
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);
      setImageSrc(objectURL);
      
    } catch (error) {
      console.error('Error fetching the image:', error);
      setImageSrc(''); // Set to a default or error image if needed
    }
   

  };

  return (
    <div className="main2">
      <div className="nav2">
        <h2>R-Verse</h2>
        <div style={{display:'flex',gap:10}}>
        <img  className='back-button' onClick={navigation3} src="https://static.thenounproject.com/png/251451-200.png" />
        <img className="nav2-img" src={assests.user_icon} alt="" />
        </div>
        
      </div>

      <div className="greet2">
        <p><span className='span2'>Hello, Dosto</span></p>
        <p>Kaise Madat karu aap logo ki?</p>
      </div>

      <div className="content">
        <div className="content-text">
          <label htmlFor="input">Create an image from text prompt:</label>
          <input
            type="text"
            id="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
             
          <button id='btn' className="button-85" onClick={query}>Generate</button>
        </div>
        <div className="content-img">
          <img id="image" src={imageSrc}/>
        </div>
      </div>
    </div>
  );
};

export default Main1;

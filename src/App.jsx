import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Landingpage from './components/landingpage/Landingpage'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Main1 from './components/Main/Main1';

const App = () => {
  return (
     <Router > 
        <Sidebar/>
       <Routes>
         <Route path='/' element={<Landingpage/>}/> 
         <Route path='/main' element={<Main/>}/> 
         <Route path='/main1' element={<Main1/>}/>
       </Routes>
     </Router>
    
  )
}

export default App
import {useRef, useState}from 'react'
import './App.css';
import Start from './Pages/Start';
import NameOptions from './Pages/Question';
import Result from './Pages/Result';
import { all } from 'axios';


function App() {
  const [pageNumber, setPageNumber] = useState(0);

  return <div>
        {
          pageNumber === 0 ? 
          <Start setPageFunc = {setPageNumber}/> : <></>
        }
        {
          pageNumber === 1 ?
          <NameOptions setPageFunc = {setPageNumber}/> : <></>
        }
        {
          pageNumber === 2 ?
          <Result setPageFunc = {setPageNumber}/> : <></>
        }
       
        
      
    </div>
}

export default App;

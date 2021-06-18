import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [url, setUrl] = useState('');
  function getData(){
    fetch('https://dog.ceo/api/breeds/image/random').then(res=> {
        if(res.ok){
          return res.json();
        }
        throw new Error('Request Failed');

    },NewError => console.log(NewError.message)
    ).then(jsonFile=>{
        setUrl(jsonFile.message)
    })
  }
  return (
    <div className="dogMain">
        <img className="dogImg" src={url} />
        <button onClick={getData}>Click for new picture</button>
    </div>
  );
}

export default App;

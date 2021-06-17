import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  /*const [err, setErr] = useState(null);
  const [Loaded, setLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);
  
  useEffect()

*/

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
    <div className="App">
        <img src={url}/>
        <button onClick={getData}>Click for new picture</button>
    </div>
  );
}

export default App;

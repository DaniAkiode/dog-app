import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
function App() {
  const [url, setUrl] = useState(''); //Initalise the url 
  
  //Use getData Function to fetch the api
  function getData(){
    fetch('https://dog.ceo/api/breeds/image/random').then(res=> {
        if(res.ok){
          return res.json();//If the link is valid then return the json file otherwise send error
        }
        throw new Error('Request has Failed');

    },NewError => console.log(NewError.message) //send error message 
    ).then(jsonFile=>{
        setUrl(jsonFile.message)//Set Url varible to the new dog image on the api. "message" is initalised to the link of the dog image in the api, 
        //not to be confused with the .message on the error handling 
    })
  }
  return (
    <div className="dogMain">
        <Header/> 
        <img className="dogImg" src={url} />
        <button className="btn btn-success" onClick={getData}>Click for new picture</button>
    </div>
  );
}

export default App;

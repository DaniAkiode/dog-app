import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';//import header from the header components used to display the title of the web appplication
function App() {
  const [url, setUrl] = useState(''); //Initalise the url 
  
  //Use getData Function when the button is clicked to fetch the api
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
        <button className="btn btn-success" onClick={getData}>Click for new picture</button>
        <img className="dogImg" src={url} />

    </div>
  );/*(The Hardwaron Zone, 2020) */
}

export default App;

//The Hardwaron Zone, 2020. Random Cat Image Generator with React 😺 | Building a Random Cat Image Generator with React.js. [video] Available at: <https://www.youtube.com/watch?v=ubGJv5NqYb0&list=PLUAP7Jc-AKBH-8ViMJrgzBZK07XTh4q-a&index=10> [Accessed 18 June 2021].
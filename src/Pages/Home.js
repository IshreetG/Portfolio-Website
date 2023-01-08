import React from 'react'; 
import Sidebar from '../sidebar'; 
import ishreet from '../Images/ishreet1.jpg';
import '../App.css';

function Home() {
    return (
        <div id="App">
      <div id = "container">
      <img class="fitting-image" src={ishreet} alt = "Ishreet " />
      </div>
      <Sidebar/>
        <div id= "titlebox">
        <h1>Hi,</h1>
        <h2>I'm Ishreet</h2>
        <h3> Welcome To My Portfolio </h3>
        </div>
    </div>

       
    );
}

export default Home;

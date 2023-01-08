import React from 'react'; 
import aboutish from '../Images/logoishreet.jpg';

function About() {
    return (
        <div id="about">
       <div id= "title">
            WHO AM I?  
            </div>
            <div id="text1">
        Hi, I’m Ishreet Kaur Grewal and I am a Computer Engineering student at the University of Waterloo. 
        </div>
            
            <div id="text">    
            <img id="logobrown" src={aboutish} alt = "Ishreet " />

        <div id="maintext">
        <p>I have 5+ years experience with various languages which include C++, JavaScript, ReactJS, JS.
        Alongside I have experience with Arduino, RaspberryPi, Nucleo-64 Series, etc. </p>

        <p>In the past couple of years I’ve spent my time working 
        with different technologies, product design (front-end development), and coding. </p>

        <p>Outside of the school, you can find me solving puzzles, playing with my dog, or playing piano. </p>
            </div> 
            </div>
            </div>
       
    );
}

export default About;
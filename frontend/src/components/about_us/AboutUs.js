import React from 'react';  
import peacock from "../../assets/aboutuspeacock.png"; 
import './AboutUs.css';

function App() {
    return (
      /*        <div class="box">
                  <div class="title">
                  <h1>About amorr</h1>
                  <body> Lorem Ipsum</body>
                  </div>
             <div className = 'image' >
                 <img className='img1' src={peacock}></img>
              </div>
              </div>*/
  
      <div className="container">
        <div class="box">
          <div className="titleContainer">
            <h1 class="title">
              <span class="about">About</span>
              <span class="space"> </span>
              <span class="a">a</span>
              <span class="morr">morr</span>
            </h1>
          </div>
          <p class="p1">
          Amorr is a web application that serves as an online platform providing 
          users with the luxury of choosing and receiving various services such as 
          haircuts, manicures, massages, makeup, and more in the comfort of their home.
          </p>
          <p class="p2">
          Amorr provides a convenient way to find and have beauty services provided to people who:
          <br></br>
          <br></br>Do not have the time (Scheduling issues or Traffic)
          <br></br>Do not have the means of transportation
          <br></br>Do not know about the quality of service

          </p>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <button class="click">Connect with Us </button>
            <img src={peacock} className="img-peacock" />
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
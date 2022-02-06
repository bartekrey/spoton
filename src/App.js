import './App.css';
import React, { useState } from "react";

let activeCircles = [];

function Circle (props) {

  const [active, toogleActive] = useState(false);

  function addToSelected () {
    if (active === false) {
      toogleActive(!active);
      activeCircles.push(props.id);
      console.log(activeCircles);
    } else {
      toogleActive(!active);
      activeCircles= activeCircles.filter(item => item !== props.id)
      console.log(activeCircles);
    }

    if (activeCircles !== []) {

    }

  }

  return (
    <div id={props.id} onClick={() => addToSelected()} className={`circle ${active ? 'active' : ''}`}>
    </div>
  )
}

function CirclesArray (props) {

  const keysArray =[0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]

  return (
    <div className="CirclesArray">

  {keysArray.map(id => {
    return (
      <Circle id={id} />
    )
  })}
    </div>
  )
}

function CreateSpot (props) {
  return (
    <div className="CreateSpot"><img alt="Done" src="./done.svg" />
    </div>
  )
}

function Tutorial (props) {

  const [open, tooglePopup] = useState(true);

  return (
    <div className={`popup ${open ? '' : 'closed'}`}>
      <div className="popup-top">
        <h1>Tutorial</h1> <img alt="close" onClick={() => tooglePopup(!open)} src="./close.svg"/>
      </div>
      <p>Select your own area by tapping on free spots: a new screen will ask for details</p>
      <p>Taken spots appear in two colours</p>
      <span><img alt="Green circle" src="./green.svg"/>Green : free to join</span>
      <span><img alt="Pink circle" src="./pink.svg"/>Pink: don’t disturb</span>

    </div>
  )
}


export default function App() {

  const [loggedin, LogIn] = useState (false);
  const [showTutorial, setShowTutorial] = useState (false);


  return (
    <div className="App">
      {loggedin ?
        <div className="Screen">
          <div className="header">
            <h1>CoID & CoDe Homebase</h1>
            <h1 className="user">Imran</h1>
            <button className="logout" onClick={() => LogIn(!loggedin)}>Log out</button>
          </div>

          <div className="main">

            <div className="layout">
              <CirclesArray />
              <CreateSpot />


            </div>
            <div className="popUps">
              { showTutorial ? <Tutorial /> : null }
            </div>
          </div>

          <div className="footer">
            <span>Select your area or check out other areas</span>
            <img alt="info" onClick={() => setShowTutorial(!showTutorial)} src="./info.svg"/>
          </div>

        </div>
      :
        <div className="Welcome">
          <img alt="Spoton" src="./LOGO.svg"/>
          <p>You know best what is spot on! </p>
          <p className="center-text">Customise your spaces to suit your needs  –  focus alone, invite discussion or join others!</p>
          <img alt="HSL logo" src="./HSL.png" onClick={() => LogIn(!loggedin)}/>
          <span>Scan HSL card to Log in</span>
        </div>}
    </div>
  );
}

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
  }

  return (
    <div id={props.id} onClick={() => addToSelected()} className={`circle ${active ? 'active' : ''}`}>
    </div>
  )
}

function CirclesArray (props) {

  const keysArray =[0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]

  return (
    <div className="CirclesArray" onClick={props.onClick}>

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
    <div onClick={props.onClick} className="CreateSpot"><img alt="Done" src="./done.svg" />
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

  const [loggedin, logIn] = useState (false);
  const [done, accept] = useState (false);
  const [showTutorial, setShowTutorial] = useState (false);
  const [thisIsDesignA, setDesign] = useState (false);

  function Screen () {
    return (
      <div className="Screen">
        <div className="header">
          <h1>CoID & CoDe Homebase</h1>
          <h1 className="user">Imran</h1>
          <button className="logout" onClick={() => logIn(!loggedin)}>Log out</button>
        </div>

        <div className="main">

          <div className="layout">
            <CirclesArray />

            <CreateSpot onClick={() => accept(!done)} />

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
    )
  }

  function Welcome () {
    return (
      <div className="Welcome">
        <span className="chooseDesign" onClick={() => setDesign(!thisIsDesignA)}>design {thisIsDesignA ? "A" : "B"}</span>
        <img alt="Spoton" src="./LOGO.svg"/>
        <p>You know best what is spot on! </p>
        <p className="center-text">Customise your spaces to suit your needs  –  focus alone, invite discussion or join others!</p>
        <img alt="HSL logo" src="./HSL.png" onClick={() => logIn(!loggedin)}/>
        <span>Scan HSL card to Log in</span>
      </div>
    )
  }

  function NewSpot () {
    return (
      <div class="Form">
      <div className="header">
        <h1>CoID & CoDe Homebase</h1>
        <h1 className="user">Imran</h1>
        <button className="logout" onClick={() => logIn(!loggedin)}>Log out</button>
      </div>


        <form>

        <img alt="close" className="align-flex-end" onClick={() => accept(!done)} src="./close.svg"/>


        {thisIsDesignA
          ?
          <div className="field">
            <label for="name">Name your area</label> <br/>
            <textarea id="name" name="name">
            What are you planning to do?</textarea> <br/>
          </div>
        :
        <div className="field">
          <label for="name">Label your area</label> <br/>
          <div className="row">
            <button className="activity">Study session</button>
            <button className="activity">Hang out</button>
            <button className="activity">Thesis</button>
            <button className="activity">Discussion</button>
            <button className="activity">Knitting</button>
            <button className="activity">Group work</button>
            <button className="activity">Reading Circle</button>
            <button className="activity">Chillin'</button>
            <button className="custom">........</button>
          </div>
        </div>
      }


        <div className="field">
          <label for="description">Additional information</label> <br/>
           <textarea id="description" name="description">
           Anything others should know?</textarea> <br/>
           <div className="row">
            <button className="join">Please join </button>
            <button className="donot">Do not disturb </button>
           </div>
        </div>

        <div className="field">When you leave home, show your HSL <br/>
        card again to login and close the area.</div>

          <button className="big">Done</button>
        </form>

      </div>
    )
  }



  if (loggedin && done ) {
    return (
      <div className="App">
        <NewSpot/>
      </div>
      )
  } else if (loggedin) {
      return(
        <div className="App">
          <Screen/>
        </div>)
    } else {
      return (
        <div className="App">
          <Welcome/>
        </div>
      )
    }
}

/*
return (
  <div className="App">
    {loggedin ?
      <Screen />
    :
      <Welcome />}
  </div>
);*/

import './App.css';
import { useState, useEffect } from "react";

let activeCircles = [];

function Circle (props) {

  const [activeCircle, toogleCircle] = useState(false);

  function addToSelected () {
    if (activeCircle === false) {
      toogleCircle(!activeCircle);
      activeCircles.push(props.id);
      console.log(activeCircles);
    } else {
      toogleCircle(!activeCircle);
      activeCircles= activeCircles.filter(item => item !== props.id)
      console.log(activeCircles);
    }
  }

  return (
    <div id={props.id} key={props.id} onClick={() => addToSelected()} className={`circle ${activeCircle ? 'active' : ''}`}>
    </div>
  )
}

function CirclesArray (props) {

  const keysArray =[0, 1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]

  return (
    <div className="CirclesArray" onClick={props.onClick}>

  {keysArray.map(id => {
    return (
      <Circle id={id} key={id} />
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
  const [thisIsDesignA, setDesign] = useState (false);


  function Screen () {
    const [showTutorial, setShowTutorial] = useState (false);


    useEffect ( () => {
      console.log("I started effect");
      // eslint-disable-next-line
      const selectedArea = activeCircles.map(id => {
        let element = document.getElementById(id)
        return (element.getBoundingClientRect())
      })
    })


/*
    function Spot (props) {
      const circles = props.circles;

      var coordinates = circles.map(id => {
        console.log(id);
        let element = document.getElementById(id);
        console.log(element);
        return (element.getBoundingClientRect())
      })

      console.log(coordinates);
      return (
        <div>
          {coordinates}
        </div>
      )
    }
*/


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

          {/*
          <Spot circles={[2,3]} />
          <Spot circles={selectedArea} />
          */}

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

    const [clicked, click] = useState ("");
    const [chosenActivity, setActivity] = useState("");

    function ActivityButton (props) {
      const [active, setActive] = useState (false);

      function setActivityFunction () {
        setActivity(props.name);
        console.log(props.name);
        console.log(chosenActivity);

        console.log(active);
        setActive(!active);
        console.log(active);
      }

      return (
        <button onClick={setActivityFunction} className={`activity ${active ? 'active' : ''}`}> {props.name} </button>
      )
    }

    return (
      <div className="Form">
      <div className="header">
        <h1>CoID & CoDe Homebase</h1>
        <h1 className="user">Imran</h1>
        <button className="logout" onClick={() => logIn("!loggedin")}>Log out</button>
      </div>


        <form>

        <img alt="close" className="align-flex-end" onClick={() => accept(!done)} src="./close_white.svg"/>


        {thisIsDesignA
          ?
          <div className="field">
            <label htmlFor="name">Name your area</label> <br/>
            <textarea id="name" name="name" defaultValue="What are you planning to do?">
            </textarea> <br/>
          </div>
        :
        <div className="field">
          <label htmlFor="name">Label your area</label> <br/>
          <div className="row">
            <ActivityButton name="Study session" />

            <button onClick={() => setActivity("study session")} className="activity">Discussion</button>
            <button onClick={() => setActivity("study session")} className="activity">Knitting</button>
            <button onClick={() => setActivity("study session")} className="activity">Group work</button>
            <button onClick={() => setActivity("study session")} className="activity">Reading Circle</button>
            <button onClick={() => setActivity("study session")} className="activity">Chillin'</button>
            <button onClick={() => setActivity("study session")} className="custom">........</button>
          </div>
        </div>
      }


        <div className="field">
          <label htmlFor="description">Additional information</label> <br/>
           <textarea id="description" name="description" defaultValue="Anything others should know?">
           </textarea> <br/>
           <div className="row">
            <button className={`please-join ${clicked === "please-join" ? 'active' : ''}`}
            onClick={() => click("please-join" ? "please-join" : "")}>Please join </button>

            <button className={`dont-disturb ${clicked === "dont-disturb" ? 'active' : ''}`}
            onClick={() => click("dont-disturb" ? "dont-disturb" : "")}>Do not disturb </button>
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
    console.log("Logged in and done with area selection")
    return (
      <div className="App">
        <NewSpot/>
      </div>
      )
  } else if (loggedin) {
    console.log("Just logged in")
      return(
        <div className="App">
          <Screen/>
        </div>)
    } else {
      console.log("Logged out")
      return (
        <div className="App">
          <Welcome/>
        </div>
      )
    }
}

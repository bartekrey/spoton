import './App.css';
import { useState, useRef } from "react";


  let activeCircles = [];


export default function App() {




//Three states that control which page we are on at the moment. Last state which is controled on welcome screen decides if user sees version A or B of the interfaces
  const [loggedin, logIn] = useState (false);
  const [doneWithAreaSelection, goToAreaCreation] = useState (false);
  const [thisIsDesignA, setDesign] = useState (false);

  const [openPopUp, tooglePopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [social, setSocial] = useState("");

  const [selectedArea, setSelectedArea] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedSocial, setSelectedSocial] = useState("");

  if (loggedin && doneWithAreaSelection ) {
    return (
      <div className="App">
        <AreaCreation/>
      </div>
      )
  } else if (loggedin) {
      return(
        <div className="App">
          <AreaSelection/>
        </div>)
    } else {
      return (
        <div className="App">
          <Welcome/>
        </div>
      )
    }

//welcome screen. If I declare image sources this way they appear on github page, but not in dev
    function Welcome () {
      return (
        <div className="Welcome">
          <span className="chooseDesign" onClick={() => setDesign(!thisIsDesignA)}>design {thisIsDesignA ? "A" : "B"}</span>
          <img alt="Spoton" src="/LOGO.sbackground: #65FA86;
  border: 3px solid #51C68E;
  color: #7336F5;vg"/>
          <p>You know best what is spot on! </p>
          <p className="center-text">Customise your spaces to suit your needs  –  focus alone, invite discussion or join others!</p>
          <img alt="HSL logo" src="./HSL.png" onClick={() => logIn(!loggedin)}/>
          <span>Scan HSL card to Log in</span>
        </div>
      )
    }


  function AreaSelection () {

    const [showTutorial, setShowTutorial] = useState (false);

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

function Area (props) {
  const array = props.circles;

  function getCols(arr, cols) {
      const min = Math.min.apply(Math,arr)    // NaN
      const max = Math.max.apply(Math,arr)    // Nan
      const colMin = (min - 1) % cols
      const colMax = (max - 1) % cols //-1 cause zero-based
      return [colMin + 1, colMax + 2]
    }

    function getRows(arr, columns) {
        const min = Math.min.apply(Math,arr)    // NaN
        const max = Math.max.apply(Math,arr)    // Nan
        const rowMin = Math.ceil(min / columns)
        const rowMax = Math.ceil(max / columns)
        return [rowMin, rowMax + 1]
      }

  const rows = getRows (array, 3);
  const columns = getCols(array, 3);

  const row_start = rows[0];
  const column_start = columns[0];
  const row_end = rows[1];
  const column_end = columns[1];

  const style = {
    gridArea:row_start +"/" +column_start +"/" + row_end +"/"+column_end
  };

  function getProportion () {
    let wide = column_end-column_start
    let high = row_end - row_start

    if (wide > high) {
      return ("horizontal")
    } else if (high > wide) {
      return ("vertical")
    } else {
      return ("diagonal")
    }
  }

  const proportion = getProportion();

  function clickArea () {
    setTitle(props.title);
    setDescription(props.description);
    setSocial(props.social);
    tooglePopUp(!openPopUp);
  }



  return (
    <div onClick={clickArea} className={`area ${props.social ? props.social : ""}`} style={style}>
      <span className={`area-title ${proportion}`}>{props.title}</span>
    </div>
  )
};

function Tutorial (props) {

  return (
    <div className="popup">
      <div className="popup-top">
        <h1>Tutorial</h1> <img alt="close" onClick={() => {setShowTutorial(!showTutorial); activeCircles=[]}} src="./close.svg"/>
      </div>
      <p>Select your own area by tapping on free spots: a new screen will ask for details</p>
      <p>Taken spots appear in two colours</p>
      <span className="flex-span"><img alt="Green circle" src="./green.svg"/>Green : free to join</span>
      <span className="flex-span"><img alt="Pink circle" src="./pink.svg"/>Pink: don’t disturb</span>

    </div>
  )
};


function AreaPopUp (props) {

  console.log (selectedTitle);
  console.log(title)

  function changeTitleAndReset () {
    setTitle("Thank you for using SpotOn");
    setSelectedArea([]);
    setDescription("See you again!");
  }

  return (
    <div className="popup">
    <img className="to-right" alt="close" onClick={() => {tooglePopUp(!openPopUp); activeCircles=[]}} src="./close.svg"/>

      <h1>{title}</h1>

      <p>{description}</p>

      {social === "please-join" &&
      <span className="flex-span"><img alt="Green circle" src="./green.svg"/>Please join</span>}

      {social === "dont-disturb" && <span className="flex-span"><img alt="Pink circle" src="./pink.svg"/>Don’t disturb</span>}

      {title === selectedTitle && <div onClick={changeTitleAndReset} className="space-between"><img alt="Edit" src="./edit.svg"/><img alt="Delete" src="./delete.svg"/></div> }

    </div>
  );
};


  const keysArray =[1, 2 ,3 ,4 ,5 ,6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];


    return (
      <div className="AreaSelection">
        <div className="header">
          <h1>CoID & CoDe Homebase</h1>
          <h1 className="user">Imran</h1>
          <button className="logout" onClick={() => logIn(!loggedin)}>Log out</button>
        </div>

        <div className="main">

        <div className="layout">

        <div className="CirclesArray">

      {keysArray.map(id => {
        return (
          <Circle id={id} key={id} />
        )
      })}


        </div>

        <div className="Areas">
          <Area circles={[12]} title="Thesis" social="dont-disturb" description="That's my desk, Imran was here"/>

          <Area circles={[27, 30, 29, 26]} title="Chat with me" social="please-join" description="Do you want to be my friend? uwu"/>

          <Area circles={selectedArea} title={selectedTitle} description={selectedDescription} social={selectedSocial} />

        </div>


          <div onClick={() => goToAreaCreation(!doneWithAreaSelection)} className="SubmitArea"><img alt="Done" src="./done.svg" />
          </div>

          </div>

          <div className="popUps">
            {showTutorial ? <Tutorial /> : null }
            {openPopUp ? <AreaPopUp /> : null}
          </div>
        </div>

        <div className="footer">
          <span>Select your area or check out other areas</span>
          <img alt="info" onClick={() => setShowTutorial(!showTutorial)} src="./info.svg"/>
        </div>

      </div>
    )
  }



  function AreaCreation () {

    const [chosenSocial, setChosenSocial] = useState ("");
    const [chosenActivity, setChosenActivity] = useState("");
    const title = useRef();
    const description = useRef();
    const [custom, setCustom] = useState(false);

    function ActivityButton (props) {
      const [active, setActive] = useState (false);

      function setActivityFunction () {
        setChosenActivity(props.name);
        setActive(!active);
      }

      return (
        <button onClick={setActivityFunction} className={`activity ${props.name === chosenActivity ? 'active' : ''}`}> {props.name} </button>
      )
    };

    function setNewArea (props) {
      try {
        setSelectedTitle(title.current.value);
      }
      catch {
        setSelectedTitle(chosenActivity);
      }
      finally {
        setSelectedDescription(description.current.value); setSelectedArea(activeCircles);
        setSelectedSocial(chosenSocial);
        goToAreaCreation(!doneWithAreaSelection)
      }
    };


    return (
      <div className="AreaCreation">
      <div className="header">
        <h1>CoID & CoDe Homebase</h1>
        <h1 className="user">Imran</h1>
        <button className="logout" onClick={() => {
          logIn(!loggedin);
          goToAreaCreation(!doneWithAreaSelection);
        }}>Log out</button>
      </div>

      <div className="form">


        <img alt="close" className="align-flex-end" onClick={() => goToAreaCreation(!doneWithAreaSelection)} src="./cancel_white.svg"/>


        {thisIsDesignA
          ?
          <div className="field">
            <label htmlFor="name">Name your area</label> <br/>
            <textarea ref={title} id="name" name="name" placeholder="What are you planning to do?">
            </textarea> <br/>
          </div>
        :
        <div className="field">
          <label htmlFor="name">Label your area</label> <br/>
          <div className="row">
            <ActivityButton name="Study session" />
            <ActivityButton name="Hang out" />
            <ActivityButton name="Thesis" />
            <ActivityButton name="Discussion" />
            <ActivityButton name="Knitting" />
            <ActivityButton name="Group work" />
            <ActivityButton name="Reading Circle" />
            <ActivityButton name="Chillin'" />
            <button onClick={() => {setCustom(!custom); setChosenActivity(".......")}} className={`activity ${custom ? 'active' : ''}`}> ....... </button>
          </div>
          {custom && <input ref={title} className="custom-tag"></input>}
        </div>
      }


        <div className="field">
          <label htmlFor="description">Additional information</label> <br/>
           <textarea ref={description} id="description" name="description" placeholder="Anything others should know?">
           </textarea> <br/>

           <div className="row">

            <button className={`please-join ${chosenSocial === "please-join" ? 'active' : ''}`}
            onClick={() => setChosenSocial("please-join" ? "please-join" : null)}>Please join </button>

            <button className={`dont-disturb ${chosenSocial === "dont-disturb" ? 'active' : ''}`}
            onClick={() => setChosenSocial("dont-disturb" ? "dont-disturb" : null)}>Do not disturb </button>

           </div>
        </div>

        <div className="field">When you leave home, show your HSL <br/>
        card again to login and close the area.</div>

          <button onClick={setNewArea} className="big">Done</button>
          </div>
      </div>
    )
  }
}

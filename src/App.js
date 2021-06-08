import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

// Components
import Deck from './components/Deck/Deck';
import SortButtons from './components/Buttons/SortButtons';

function App() {

  const [deck, setDeck] = useState([]);
  const [deal, setDeal] = useState(false);

  let deckArr = [];
  let resourceArr = ['wheat','brick','stone','glass','wood'];

  for(let i = 0; i<3; i++) {
    deckArr.push(resourceArr[i])
    deckArr.push(resourceArr[i])
    deckArr.push(resourceArr[i])
  }

  const dealSpread = () => {
    let spreadArr = [];

    for(let x=0; x<3; x++) {
      let pos = Math.floor(Math.random() * deckArr.length);
      
      spreadArr.push(deckArr[pos]);
      deckArr.splice(pos, 0)      
    }

    console.log(deckArr);
    setDeck(spreadArr);
  }

  // useEffect(() => {
  //   console.log('Hit');
  // }, [dealSpread]); 

  return (
    <div className="App classes.root">
      <Deck deck={deck} dealSpread={dealSpread} />
      <SortButtons dealSpread={dealSpread} />
    </div>
  );
}

export default App;

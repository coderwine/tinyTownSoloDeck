import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

// Components
import Deck from './components/Deck/Deck';
import SortButtons from './components/Buttons/SortButtons';
import Navbar from './components/Navbar/Navbar';


function App() {
  let baseDeck = [
    'wood','wood','wood',
    'brick','brick','brick',
    'stone','stone','stone',
    'glass','glass','glass',
    'wheat','wheat','wheat',
  ];

  const [deck, setDeck] = useState(baseDeck);
  const [spread, setSpread] = useState([]);

  const [discard, setDiscard] = useState(0);
  const [lastPick, setLastPick] = useState('brick');

  const appProps = {
    deckState: {
      deck: deck,
      setDeck: setDeck,
    },
    discard: {
      discard: discard,
      setDiscard: setDiscard,
    }, 
    lastPick: {
      lastPick: lastPick,
      setLastPick: setLastPick
    },
    spread: {
      spread: spread,
      setSpread: setSpread
    },
    baseDeck: baseDeck,
  }

  useEffect(() => {
    console.table('Current Deck: ', deck);
  }, [deck]); 

  return (
    <div className="App classes.root">
      <Navbar id="nav" lastPick={lastPick} />
      <Deck app={appProps} />
      <SortButtons app={appProps} />
    </div>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

// Components
import Navbar from './components/Navbar/Navbar';
import Deck from './components/Deck/Deck';
import Footer from './components/Footer/Footer';


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
  const [lastPick, setLastPick] = useState('');

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
    console.log('Current Deck: ', deck);
    console.log('Discard Count:', discard);
  }, [deck]); 

  const resetGame = () => {
    setDeck(baseDeck);
    setDiscard(0);
    setLastPick('');
    setSpread([]);
  }

  return (
    <div className="App classes.root">
      <Navbar lastPick={lastPick} reset={resetGame} />
      <Deck app={appProps} />
      <Footer />
    </div>
  );
}

export default App;

/* NOTE
! File Notes:
  States
    - deck
      Current state of the overall deck throughout game.  Default is an array of 5 resources in multiples of 3.
        - NEEDED IN: 
          - Deck
          - Spread

    - spread
      After shuffled, a set of 3 resources are selected and set here to map over to display for user to select one.
        - NEEDED IN:
          - Spread

    - discard
      Current state of the discarded cards (both selected and unused resources).  Is evaluated against the state of "deck" to gauge when to reshuffle resources.
        - NEEDED IN:
          - Spread

    - lastPicked
      A feedback state to show users what they had selected last.  Default value is an empty string.
        - NEEDED IN: 
          - Navbar

*/
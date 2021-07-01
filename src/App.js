import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

// Components
import OnLoadModal from './components/Modals/OnLoadModal'
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
  const [version, setVersion] = useState('v.1.0.0');
  const [start, setStart] = useState(false);

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

  const resetGame = () => {
    setDeck(baseDeck);
    setDiscard(0);
    setLastPick('');
    setSpread([]);
  }

  const navProps = {
    lastPick: lastPick,
    resetGame: resetGame,
    version: {
      version: version,
      setVersion: setVersion
    }
  }

  return (
    <div className="App classes.root">
      <OnLoadModal start={start} />
      <Navbar navProps={navProps} />
      <Deck app={appProps} />
      <Footer version={version} />
    </div>
  );
}

export default App;

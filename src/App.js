import React, {useState, useEffect} from 'react';
import '@fontsource/roboto';
import './App.css';

// Components
import Deck from './components/Deck/Deck';
import SortButtons from './components/Buttons/SortButtons';
import Navbar from './components/Navbar/Navbar';

function App() {

  // const [deck, setDeck] = useState([]);
  // const [deal, setDeal] = useState(false);

  const [discard, setDescard] = useState(0);
  const [lastPick, setLastPick] = useState('glass');

  const appProps = {
    discard: {
      discard: discard,
      setDescard: setDescard,
    }, 
    lastPick: {
      lastPick: lastPick,
      setLastPick: setLastPick
    }
  }
  // useEffect(() => {
  //   console.log('Hit');
  // }, [dealSpread]); 

  return (
    <div className="App classes.root">
      <Navbar id="nav" lastPick={lastPick} />
      <Deck />
      <SortButtons app={appProps} />
    </div>
  );
}

export default App;

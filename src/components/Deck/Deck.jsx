import {useState, useEffect} from 'react';
import '../../styles/deck.css';
import Spread from './Spread';

const Deck = props => {
    // console.log(props)
    // const [spread, setSpread] = useState(deck);
    // const [held, setHeld] = useState([]);
    // const [used, setUsed] = useState([]);
    // const [deck, setDeck] = useState([]);
    // const [deal, setDeal] = useState(false);

    // let deckProps = {
    //     spread: spread,
    //     setSpread: setSpread,
    //     setHeld: setHeld,
    //     setUsed: setUsed,
    //     setDeck: setDeck,
    //     setDeal: setDeal
    // }

    // let deckArr = [];
    // let resourceArr = ['wheat','brick','stone','glass','wood'];

    // for(let i = 0; i<3; i++) {
    //     deckArr.push(resourceArr[i])
    //     deckArr.push(resourceArr[i])
    //     deckArr.push(resourceArr[i])
    // }

    // const dealSpread = () => {
    //     let spreadArr = [];

    //     for(let x=0; x<3; x++) {
    //     let pos = Math.floor(Math.random() * deckArr.length);
        
    //     spreadArr.push(deckArr[pos]);
    //     deckArr.splice(pos, 0)      
    //     }   

    //     console.log(deckArr);
    //     setDeck(spreadArr);
    // }

    // useEffect(() => {
        // console.log('Held: ', held, "Used:", used);
    // }, [spread]); 

    return (
        <div id="container">
            <Spread />
            
        </div>
    );
}

export default Deck;

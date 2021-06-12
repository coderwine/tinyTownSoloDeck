import {useState, useEffect} from 'react';
import '../../styles/deck.css';
import Spread from './Spread';

const Deck = props => {
    console.log(props)
    let appProps = props.app;
    // console.log('appProps: ', appProps)
    // const [spread, setSpread] = useState([]);

    // let baseDeck = [
    //     'wood','wood','wood',
    //     'brick','brick','brick',
    //     'stone','stone','stone',
    //     'glass','glass','glass',
    //     'wheat','wheat','wheat',
    // ];
    
    // const thisDeal = () => {
    //     let status = props.app.deckState.deck;
    //     let shuffledDeck = [];

    //     if(status.length === 0) {
    //         props.app.deckState.setDeck(props.app.baseDeck);
    //     } else {
    //         console.log('Deck Status:', status)
    //     }

    //     for(let i=0; i<3; i++) {
    //         let pos = Math.floor(Math.random() * props.app.baseDeck.length);
    //         console.table(props.app.baseDeck, pos);
    //         shuffledDeck.push(props.app.baseDeck[pos]);
    //         props.app.baseDeck.splice(pos, 1);
    //     }
    //     props.app.deckState.setSpread(shuffledDeck);
    // }
    
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
            <Spread app={appProps} />
        </div>
    );
}

export default Deck;

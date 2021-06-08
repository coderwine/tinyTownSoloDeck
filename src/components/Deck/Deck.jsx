import {useState, useEffect} from 'react';
import '../../styles/deck.css';


import Spread from './Spread';

const Deck = props => {
    console.log(props)
    const [spread, setSpread] = useState(props.deck);
    const [held, setHeld] = useState([]);
    const [used, setUsed] = useState([]);

    let deckProps = {
        spread: spread,
        setSpread: setSpread,
        setHeld: setHeld,
        setUsed: setUsed
    }

    useEffect(() => {
        console.log('Held: ', held, "Used:", used);
    }, [spread]); 

    return (
        <div id="container">
            <Spread deck={deckProps} />
            {
                // console.log('Spread:',spread, 'Held:', held, 'Used:', used)
            }
        </div>
    );
}

export default Deck;

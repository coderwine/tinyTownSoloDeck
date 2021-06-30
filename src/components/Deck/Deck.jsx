import '../../styles/deck.css';
import Spread from './Spread';

const Deck = props => {
    let appProps = props.app;

    return (
        <div id="container">
            <Spread app={appProps} />
        </div>
    );
}

export default Deck;

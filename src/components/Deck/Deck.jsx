import '../../styles/deck.css';
import Spread from './Spread';
import OriginalDeal from './Original';

const Deck = props => {
    let appProps = props.app;
        
    return (
        <div id="container">
            <OriginalDeal app={appProps} />
            <br />
            <Spread app={appProps} />
        </div>
    );
}

export default Deck;

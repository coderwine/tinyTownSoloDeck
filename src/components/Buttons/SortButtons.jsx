import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        // margin: theme.spacing(1),
        color: 'goldenrod',
        // textShadow: '-4px 4px 8px sienna',
        },
        backgroundColor: 'sienna',
        fontFamily: [
            'Crimson Text',
            'serif'
        ],
        fontSize: '14pt',
    },
}));

export default function ShuffleButton(props) {
    console.log(props);
    const classes = useStyles();

    const thisDeal = () => {
        let deckPath= props.app.deckState;
        let currentDeck = deckPath.deck;
        console.log('This Current:', currentDeck.length)
        let shuffledDeck = [];

        if(currentDeck.length === 0) {
            deckPath.setDeck(props.app.baseDeck);
            props.app.spread.setSpread([]);
        } else {
            for(let i =0; i<3; i++) {
                let pos = Math.floor(Math.random() * currentDeck.length);
                shuffledDeck.push(currentDeck[pos]);
                currentDeck.splice(pos, 1);
            }
            deckPath.setDeck(currentDeck);
            props.app.spread.setSpread(shuffledDeck)
        }

        console.log('DECK LENGTH:', currentDeck.length)
    }

    const btnDisplay = () => {
        return(
            props.app.discard === 15 ? 
            <Button className={classes.root} 
                size="large"
                variant="contained"
                onClick={thisDeal} >Shuffle</Button> : 
            <Button className={classes.root} 
                size="large"
                variant="contained"
                onClick={thisDeal} > Spread</Button>
        )
    }

    return(
        <> 
        {    
        // <Button className={classes.root} size="large" variant="contained" onClick={props.dealSpread}>Shuffle</Button>
        }
        {btnDisplay()}
        </>
    )
}

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SortButton from '../Buttons/SortButton';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 300,
        maxHeight: 125,
        margin: '.75rem auto 0 auto',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 60,
        fontFamily: [
            'Crimson Text',
            'serif'
        ]
    },
    pos: {
        marginBottom: 5,
    },
    deal: {
        backgroundColor: 'rgba(255,255,255,.65);',
        height: '200px',
        width: 'auto',
        paddingTop: '25%',
    },
});

const Spread = props => {

    const spread = props.app.spread;
    const deckLength = props.app.deckState.deck.length;
    let discardCount = props.app.discard;
    let value = discardCount.discard;
    const classes = useStyles();

    const selectedCard = (resource) => {
        // console.log('selectCard', discardCount);
        props.app.lastPick.setLastPick(resource)

        value !== 15 ? discardCount.setDiscard(value + 3) : discardCount.setDiscard(0);
        
        thisDeal();
        // console.log(props.app.deckState.deck)
    }

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

    }

    const displaySpread = () => {
        if(spread.spread.length === 0 && deckLength !== 0){
            return (
                <SortButton deal={thisDeal} />
            )
        } else {

            return spread.spread.map((resource, index) => {
                let type;
                
                for(let i=0; i < resource.length; i++){
                    if(i === 0) {
                        type = resource[i].toUpperCase();
                    } else {
                        type += resource[i];
                    }
                }

                return (
                    <Card key={index} className={classes.root} id={resource} onClick={() => selectedCard(resource)}>
                        <CardContent className='textDisplay' >
                            <Typography className={classes.title} gutterBottom>
                            {type}
                            </Typography>
                        </CardContent>
                    </Card>
                ) 
            })

        }  
    }

    return(
        <>
        {displaySpread()}
        </>
    )
}

export default Spread;
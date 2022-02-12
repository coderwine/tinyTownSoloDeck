import React, { useState, useEffect } from 'react';
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

const OriginalDeal = (props) => {

    const spread = props.app.spread;
    const deckLength = props.app.deckState.deck.length;
    let discardCount = props.app.discard;
    let value = discardCount.discard;
    const btnName = 'Original';
    const classes = useStyles();
    let thisDeck = [];
    let currentSpread = [];
    
    const [base, setBase] = useState(props.app.testDeck);

    // const [thisDeck, setThisDeck] = useState([]);
    // const [load, setLoad] = useState(true);

    // Lifecycles
    
    useEffect(() => {
        // thisDeal();
    }, []);

    
    const thisSpread = () => {

        for(let l=0; l<3;l++) {
            let pos = Math.floor(Math.random()*thisDeck.length);
            console.log(pos);
            currentSpread.push(thisDeck[pos]);
            thisDeck.splice(pos, 1);
            console.log(thisDeck);
        }
        console.log("Current:", currentSpread)
    }

    /*
    This sets up the initial deck to cycle through.
     */
    const thisDeal = () => {
        // let deckPath = props.app.testDeck;
        // let currentDeck = deckPath;
        let shuffledDeck = [];

        for(let i=0; i < 3; i++) {
            let pos = Math.floor(Math.random() * base.length);
            shuffledDeck.push(base[pos]);
            base.splice(pos, 1);
        }

        thisDeck = shuffledDeck;
        console.log('This Deck:', thisDeck)

        thisSpread();
    }
    
    const selectedCard = (res) => {
        props.app.lastPick.setLastPick(res);
    }
    
    //NOTE: Need to display the button OR the 3-card spread.  
    // const displaySpread = () => {
    //     if(spread.spread.length === 0 && deckLength !== 0){
    //         return (
    //             <SortButton btnName={btnName} deal={thisDeal} />
    //         )
    //     } else {

    //         return spread.spread.map((resource, index) => {
    //             let type;
                
    //             for(let i=0; i < resource.length; i++){
    //                 if(i === 0) {
    //                     type = resource[i].toUpperCase();
    //                 } else {
    //                     type += resource[i];
    //                 }
    //             }

    //             return (
    //                 <Card key={index} className={classes.root} id={resource} onClick={() => selectedCard(resource)}>
    //                     <CardContent className='textDisplay' >
    //                         <Typography className={classes.title} gutterBottom>
    //                         {type}
    //                         </Typography>
    //                     </CardContent>
    //                 </Card>
    //             ) 
    //         })

    //     }  
    // }
    

    return(
        <div>
        {console.log('Spread:', props.app.baseSpread.baseSpread, 'ThisDeck:', thisDeck)}
            <SortButton deal={thisDeal} btnName={btnName} />
        </div>
    )
}

export default OriginalDeal;
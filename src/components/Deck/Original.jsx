import React, { useState, useEffect } from 'react';
import SortButton from '../Buttons/SortButton';

const OriginalDeal = (props) => {
    console.log(props);
    const btnName = 'Original';
    let thisDeck = [];
    let currentSpread = [];
    
    const [base, setBase] = useState(props.app.testDeck);
    // const [thisDeck, setThisDeck] = useState([]);
    const [load, setLoad] = useState(true);

    // Lifecycles
    
    useEffect(() => {
        thisDeal();
    }, [load]);

    
    const spread = () => {
        for(let l=0; l<3;l++) {
            // console.log('L:', l)
            // props.app.baseSpread.setBaseSpread(thisDeck[l])
            currentSpread.push(thisDeck[l]);
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

        for(let i=0; i < 15; i++) {
            let pos = Math.floor(Math.random() * base.length);
            shuffledDeck.push(base[pos]);
            base.splice(pos, 1);
        }

        thisDeck = shuffledDeck;
        // console.log('This Deck:', thisDeck)

        spread();
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
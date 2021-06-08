import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

export default function ShuffleButton(props) {
    console.log(props);
    const classes = useStyles();

    // const shuffleDeck = () => {
    //     const resources = ['wood', 'stone', 'glass', 'brick', 'wheat'];
    //     const set =[]
    
    //     for(let i = 0; i < 5; i++) {
    //         for(let p = 0; p < 3; p++) {
    //         set.push(resources[i])
    //     }  
    //     }
        
    //     props.setDeck(set)
    // }

    return(
        <> 
            <Button className={classes.root} size="large" variant="contained" color="primary" onClick={props.dealSpread}>Shuffle</Button>
            {
                // <Button size="large" variant="outlined"color="secondary" onClick={shuffleDeck}>Turn Deck</Button>
            }
        </>
    )
}

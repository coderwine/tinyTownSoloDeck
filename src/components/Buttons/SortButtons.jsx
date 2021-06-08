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
    console.log(props.app);
    const classes = useStyles();

    const btnDisplay = () => {
        return(
            props.app.discard === 15 ? 
            <Button className={classes.root} size="large"
                variant="contained">Shuffle</Button> : 
            <Button className={classes.root} size="large"
                variant="contained"> Spread</Button>
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

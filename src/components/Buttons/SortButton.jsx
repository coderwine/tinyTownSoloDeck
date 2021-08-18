import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        color: 'goldenrod',
        },
        backgroundColor: 'sienna',
        fontFamily: [
            'Crimson Text',
            'serif'
        ],
        fontSize: '14pt',
        width: '50vw',
    },
    div: {
        width: '100vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default function ShuffleButton(props) {
    const classes = useStyles();

    return(
        <div className={classes.div} >
            <Button className={classes.root} 
                size="large"
                variant="contained"
                onClick={props.deal} >{props.btnName}</Button>
        </div>
    )
}

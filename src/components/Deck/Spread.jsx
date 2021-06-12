import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import { SettingsInputSvideo } from '@material-ui/icons';

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
});

const Spread = props => {
    console.log(props.app.spread);
    const spread = props.app.spread;
    console.log(spread.spread.length)
    const classes = useStyles();

    const testFunc = (res) => {
        let arr = []
        arr.push(res.target.id);
        
        props.deck.setUsed(arr);
        props.deck.setHeld(props.deck.spread);
        props.deck.setSpread([]);
    }

    const displaySpread = () => {
        if(spread.spread.length === 0){
            return <h2>Deal Spread</h2>
        } else {
            // console.log('Else Hit');

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
                    <Card key={index} className={classes.root}>
                        <CardContent key={index} id={resource} className='textDisplay' onClick={testFunc}>
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
        {
                // spread.spread.map((resource, index) => {
                //     let type;
                    
                //     for(let i=0; i < resource.length; i++){
                //         if(i === 0) {
                //             type = resource[i].toUpperCase();
                //         } else {
                //             type += resource[i];
                //         }
                //     }

                //     return (
                //         <Card key={index} className={classes.root}>
                //             <CardContent key={index} id={resource} className='textDisplay' onClick={testFunc}>
                //                 <Typography className={classes.title} gutterBottom>
                //                 {type}
                //                 </Typography>
                //             </CardContent>
                //         </Card>
                //     ) 
                // })
            displaySpread()
        }
        </>
    )
}

export default Spread;
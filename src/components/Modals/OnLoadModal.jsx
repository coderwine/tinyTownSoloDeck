import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import imgOne from '../../assets/forOnLoadModal/01_default_resource_picked.jpg';
import imgTwo from '../../assets/forOnLoadModal/02_deal_spread.jpg';
import imgThree from '../../assets/forOnLoadModal/03_resource_selection.jpg';
import imgFour from '../../assets/forOnLoadModal/04_selected_resource.jpg';
import imgFive from '../../assets/forOnLoadModal/05_resource_count.jpg';
import imgSix from '../../assets/forOnLoadModal/06_additional menu options.jpg';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        widht: '90vw',
        overflowY: 'scroll',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: '.25rem 1rem 1rem 1rem',position: 'absolute',
        top: '0',
    },
    close: {
        position: 'static',
        float: 'right',
        right: '3em',
        fontSize: '14pt',
        textShadow: '0 0 10px black',
    },
    steps: {
        display: 'flex',
        flexDirection: 'column',
        width: '90vw',
        height: '75vh',
        justifyContent: 'center',
        marginTop: '-5rem',
        padding: 0,
    },
    img: {
        height: '35%',
        width: 'auto',
    }
}));

export default function AboutModal(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        props.start === true ? setOpen(true)
        : setOpen(false);
    }, [])

    return (
    <div>
        <MenuItem onClick={handleOpen} >
            <IconButton aria-label="show new notifications" color="inherit">
            <InfoIcon htmlColor='midnightblue' />
            </IconButton>
            <p>How to Use this Web Application</p>
        </MenuItem>

        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
        <Fade in={open}>
            <div className={classes.paper}>
            <h4 className={classes.close} onClick={handleClose}>X</h4>
            <h1>Welcome!</h1>
            <h2 id="transition-modal-title">Here's a Quick What-To-Do with Tiny Towns Solo!</h2>
            <div className={classes.steps} >
                <h3>On the Menu Bar:</h3>
                <img className={classes.img} src={imgOne} alt="Default Menu Bar" />
                <p>The icon next to the title indicates what was your last resource selected.  Because there isn't a game running at the beginning, it defaults to black with the title displayed.</p>
            </div>
            <div className={classes.steps} >
                <h3>How to Deal the Cards:</h3>
                <img className={classes.img} src={imgTwo} alt="Deal Spread Button" />
                <p>To start, simply click "Deal" and a spread of three resources (cards) will display!</p>
            </div>
            <div className={classes.steps} >
                <h3>Selecting a Resource:</h3>
                <img className={classes.img} src={imgThree} alt="Select Resource Sample" />
                <p>Three different resources can be selected.  Don't worry, there are a limited value just like in the real deck that will reset after all 15 cards have been "drawn".</p>
            </div>
            <div className={classes.steps} >
                <h3>Last Picked Resource:</h3>
                <img className={classes.img} src={imgFour} alt="Menu Bar with Selected Resource" />
                <p>After selecting your chosen resource, in this case, "Wheat", notice the icon at the top has changed to detail what you have picked!</p>
            </div>
            <div className={classes.steps} >
                <h3>Total Count:</h3>
                <img className={classes.img} src={imgFive} alt="Menu Resource Count" />
                <p>For fun, you can open the menu on the right and see how many of what resource you have selected throughout your play session.</p>
            </div>
            <div className={classes.steps} >
                <h3>Additional Things:</h3>
                <img className={classes.img} src={imgSix} alt="Additional Menu Options" />
                <p>Lastly, there are a couple more additional menu options as well.  The main one to know is <b>"Reset"</b>, which will... you guessed it! Reset your game by clearing the deck, the resource counter, and bringing you back to the main landing screen! </p> 
                <p>If you ever need a quick glance at this again, you can find this information in the <b>"About"</b> option along with some additional information like what this project is about and a way to provide feedback to me! Finally, if you need a refresher on the solo rules, it can be found under <b>"Solo Rules"</b>.  In additional, I have a link to the main rule book as well.</p>
            </div>
            
        </div>
        </Fade>
    </Modal>
    </div>
);
}
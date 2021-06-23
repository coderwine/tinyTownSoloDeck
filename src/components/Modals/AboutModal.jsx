import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Link from '@material-ui/core/Link';
import ContactForm from '../Forms/ContactForm';


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
    // padding: theme.spacing(8, 4, 3),
    padding: '16rem 1rem 1rem 1rem',
  },
  close: {
    position: 'static',
    float: 'right',
    right: '3em',
    fontSize: '14pt',
    textShadow: '0 0 10px black',
  },
  credits: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '2rem'

  }
}));

export default function AboutModal(props) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/*<button type="button" onClick={handleOpen}>
        react-transition-group
  </button>*/}
      <MenuItem onClick={handleOpen} >
        <IconButton aria-label="show new notifications" color="inherit">
        <InfoIcon htmlColor='midnightblue' />
        </IconButton>
        <p>About</p>
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
            <h2 id="transition-modal-title">About this Project</h2>
            <p>This was built for two reasons:  As a fun challenge for myself in development, and to maybe have a quick tool that I can use when playing Tiny Towns solo variant.</p>
            <p>I will note that I am not associated with AEG and would like to thank them and the design team for producing this fun game!</p>
            <p>The purpose of this page is only to aide and is, by no means, meant to replace the fun of flipping cards.  Use this to have fun!</p>

            <div>
            <h3>Feedback</h3>
            <p>I'd love to hear back from you regarding the good, the bad, or the broken.  Anything that can help me make this better is welcome!</p>
            <p>Please know that I don't collect any emails and only request it in case I have any follow up questions.  I may shoot over a quick "Thanks!" if nothing else</p>
            <ContactForm />
            </div>

            <h3>What I'd like to Include:</h3>
            <p>Eventually I hope to include anything that involves the available expansions.</p>
            <div className={classes.credits}>
              <Link className={classes.root}
              href="https://github.com/coderwine/tinyTownSoloDeck"
              target="_blank"
              rel="noopener"
              >
              {props.navProps.version}
              </Link>
              <Link className={classes.root}
              href="https://www.linkedin.com/in/ewine/"
              target="_blank"
              rel="noopener"
              >
              &copy; ejw 2021
              </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
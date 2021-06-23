import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'scroll',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(4, 4, 6),
    // padding: theme.spacing(3),
    padding: '10em 1em 1em 1em'
  },
  btn: {
    position: 'static',
    float: 'right',
    right: '3em',
    fontSize: '14pt',
    textShadow: '0 0 10px black',
  }
}));

export default function RulesModal() {
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
      
      <MenuItem onClick={handleOpen} >
        <IconButton aria-label="show new notifications" color="inherit">
        <MenuBookSharpIcon htmlColor='black' />
        </IconButton>
        <p>Solo Rules</p>
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
          <h4 className={classes.btn} onClick={handleClose}>X</h4>
            <h2 id="transition-modal-title">Solo Rules</h2>
            <p id="transition-modal-description">
            There is no Master Builder in the Solo variant. <br/>
            <strong>Setup</strong> <br/>
            Remove the following cards from the game when
            playing the solo variant:
            The Inn (blue), the Bank (black), Fort Ironweed (pink), and
            Opaleye’s Watch (pink).
            <br/> <br />
            <strong>Solo Rules</strong> <br/>
            Shuffle the 15 Resource cards to form a draw pile
            and reveal the top 3 cards. You choose to place
            any 1 of the 3 resources shown in your town and
            construct buildings as normal. Then place the
            corresponding card face-down on the bottom of the
            draw pile and draw a new Resource card to replace it.
            Note: In this variant, Building and Monument cards that refer
            to other players naming resources (Factory, Warehouse,
            Statue of the Bondmaker) apply to choosing resources from
            the resource deck.
            The game ends as normal, when your town is
            completed (your town is filled with resources
            and you cannot or choose not to construct any
            buildings).
            <br /> <br />
            <strong>(VP) Skill Level Achieved</strong> <br />
            38+ Master Architect <br />
            32-37 Town Planner <br />
            25-31 Engineer <br />
            18-24 Carpenter <br />
            10-17 Builder’s Apprentice <br />
            9 or less Aspiring Architect</p>
            <hr />
            <Link className={classes.root}
            href="https://www.alderac.com/wp-content/uploads/2018/11/Tiny_Towns_Rules_FINAL.pdf"
            target="_blank"
            rel="noopener"
        >
        Complete Rulebook 
        </Link>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
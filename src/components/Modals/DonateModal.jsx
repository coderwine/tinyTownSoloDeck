import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  link: {
    color: 'black',
  },
  donateBtn: {
    margin: '1rem auto',
    display: 'flex',
    justifyContent: 'center',
  }
}));

export default function DonateModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link className={classes.link}
        onClick={handleOpen}
        >Donate</Link>
      
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
            <h2 id="transition-modal-title">If You Would Like to Donate</h2>
            <p id="transition-modal-description">
            I enjoyed making this project and hope that you also enjoy using it.  If you'd like to donate any type of funds for this project, it would be much appreciated!  Cost for servers and minor upkeep does take effort but, honestly, I'm hoping that this is just something useful and fun to use.  I enjoy playing around building this and hope to make this a little more "clean" for future versionings.  Thanks for taking a look at this!
            <hr/> 
            <br/>
            <div className={classes.donateBtn} >
              <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="4WP6U559SQW7N" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
              </form>
            </div>
            Thanks again and enjoy! 
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
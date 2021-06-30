import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import DonateModal from '../Modals/DonateModal';

const useStyles = makeStyles(() => ({
    root: {
        color: 'black',
    }
}))

const Footer = (props) => {
    const classes = useStyles();

    return(
        <footer>
        
        
        <Link className={classes.root}
        href="https://boardgamegeek.com/boardgame/265736/tiny-towns"
        target="_blank"
        rel="noopener"
        >
        BGG
        </Link>
        
        <DonateModal />
        
        <Link className={classes.root}
            href="https://www.alderac.com/tiny-towns/"
            target="_blank"
            rel="noopener"
        >
        AEG
        </Link>

        </footer>
    )
}

export default Footer;
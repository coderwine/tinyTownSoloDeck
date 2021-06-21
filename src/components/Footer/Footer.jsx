// import '../../styles/footer.css';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import DonateModal from '../Modals/DonateModal';

const useStyles = makeStyles(() => ({
    root: {
        color: 'black',
    }
}))

const Footer = () => {
    const classes = useStyles();

    return(
        <footer>
        
        
        <Link className={classes.root}
        href="https://github.com/coderwine/tinyTownSoloDeck"
        target="_blank"
        rel="noopener"
        >
        v.0.1.0 &copy;2021
        </Link>
        
        <DonateModal />
        
        <Link className={classes.root}
            href="https://www.alderac.com/tiny-towns/"
            target="_blank"
            rel="noopener"
        >
        AEG Site
        </Link>

        </footer>
    )
}

export default Footer;
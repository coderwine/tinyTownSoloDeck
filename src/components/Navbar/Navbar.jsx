import { useState, useEffect } from 'react';
import '../../styles/navbar.css'
import { fade, makeStyles } from '@material-ui/core/styles';
import RulesModal from '../Modals/RulesModal';
import AboutModal from '../Modals/AboutModal';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Divider from '@material-ui/core/Divider';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import StopIcon from '@material-ui/icons/Stop';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import InfoIcon from '@material-ui/icons/Info';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
// import { SwitchCameraSharp } from '@material-ui/icons';
// import { green } from '@material-ui/core/colors';
// import { Palette } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#5cc6c4',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
        display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
        display: 'none',
        backgroundColor: 'saddlebrown',
        },
    },
    picked: {
        boxShadow: '-8px 4px 10px slategrey',
    }
}));

export default function Navbar(props) {
    // console.log(props)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [wheat , setWheat] = useState(0);
    const [brick , setBrick] = useState(0);
    const [stone, setStone] = useState(0);
    const [glass , setGlass] = useState(0);
    const [wood , setWood] = useState(0);

    //Setting State Counts: 
    const count = (res) => {
        console.log(res);
        switch(true) {
            case res === 'wood':
                setWood(wheat + 1);
                break;
            case res === 'glass':
                setGlass(glass + 1);
                break;
            case res === 'stone':
                setStone(stone + 1);
                break;
            case res === 'brick':
                setBrick(brick + 1);
                break;
            case res === 'wheat':
                setWheat(wheat + 1);
                break;
            default: console.log(res);
        }
    } 

    useEffect(() => {
        count(props.lastPick);
    }, [props.lastPick])

    const clearCount = () => {
        setWood(0);
        setGlass(0);
        setStone(0);
        setBrick(0);
        setWheat(0);

        props.reset();
        handleMenuClose();
    }

    // MENU ITEMS
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem>
            <IconButton aria-label="show new mails" color="inherit">
            <Badge badgeContent={wheat} color="secondary">
                <StopIcon htmlColor='goldenrod'/>
            </Badge>
            </IconButton>
            <p>Wheat</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={brick} overlap="circle" color="secondary">
                <StopIcon htmlColor='rgb(126,39,4)' />
            </Badge>
            </IconButton>
            <p>Brick</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={stone} color="secondary">
                <StopIcon htmlColor='rgb(155,148,148)' />
            </Badge>
            </IconButton>
            <p>Stone</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={glass} color="secondary">
                <StopIcon htmlColor='rgb(5,202,202)' />
            </Badge>
            </IconButton>
            <p>Glass</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="show new notifications" color="inherit">
            <Badge badgeContent={wood} color="secondary">
                <StopIcon htmlColor='rgb(107,59,31)' />
            </Badge>
            </IconButton>
            <p>Wood</p>
        </MenuItem>
        <Divider />
        {/* Solo Rules */}
        <RulesModal />

        {/* About Dev */}
        <AboutModal />

        {/* Reset Deck */}
        <MenuItem onClick={clearCount} >
            <IconButton aria-label="show new notifications" color="inherit">
                <RotateLeftIcon htmlColor='
                #9c4a60' />
            </IconButton>
            <p>Reset</p>
        </MenuItem>
        
        </Menu>
    );

    // LAST PICK CHECK AND DISPLAY
    const wasPicked = () => {

        let pickProps = props.lastPick;
        let thisClass;

        switch(true) {
            case pickProps === 'wheat':
                thisClass = 'goldenrod';
                break;
            case pickProps === 'brick' :
                thisClass = 'rgb(126, 39, 4)';
                break;
            case pickProps === 'stone' :
                thisClass = 'rgb(155, 148, 148)';
                break;
            case pickProps === 'wood' :
                thisClass = 'rgb(107, 59, 31)';
                break;
            case pickProps === 'glass' :
                thisClass = 'rgb(15, 222, 222)';
                break;
            default: 
                thisClass = 'black';
        }
        
        return thisClass;
    }

    return (
        <div id="nav" className={classes.grow}>
        <AppBar className={classes.root} position="fixed">
            <Toolbar>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <StopIcon className={classes.picked} htmlColor={wasPicked()} /> {props.lastPick === '' ? 'Tiny Towns Solo' : props.lastPick}
                </IconButton>
        
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={wheat} color="secondary">
                    <StopIcon htmlColor='goldenrod' />
                    Wheat
                </Badge>
                </IconButton>
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={brick} color="secondary">
                    <StopIcon htmlColor='rgb(126, 39, 4)' />
                    Brick
                </Badge>
                </IconButton>
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={stone} color="secondary">
                    <StopIcon htmlColor='rgb(155, 148, 148)' />
                    Stone
                </Badge>
                </IconButton>
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={glass} color="secondary">
                    <StopIcon htmlColor='rgb(5, 202, 202)' />
                    Glass
                </Badge>
                </IconButton>
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={wood} color="secondary">
                    <StopIcon htmlColor='rgb(107, 59, 31)' />
                    Wood
                </Badge>
                </IconButton>
            {/* Reset Button */}
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={wood} color="secondary">
                    <StopIcon htmlColor='rgb(107, 59, 31)' />
                    Reset
                </Badge>
                </IconButton>
            {/* DEV INFO */}
                <IconButton aria-label="show" color="inherit">
                <Badge badgeContent={wood} color="secondary">
                    <StopIcon htmlColor='rgb(107, 59, 31)' />
                    About 
                </Badge>
                </IconButton>
            </div>
            
            <div className={classes.sectionMobile}>
                <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </div>
            
            </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {
           // renderMenu
        }
        </div>
    );
}

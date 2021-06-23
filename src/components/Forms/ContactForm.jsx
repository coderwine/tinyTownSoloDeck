import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, ValidationError } from '@formspree/react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    btn: {
        color: 'goldenrod',
        backgroundColor: 'sienna',
        fontFamily: [
            'Crimson Text',
            'serif'
        ],
        fontSize: '14pt',
        width: '50vw',
    }
}));

export default function ContactForm() {
    const classes = useStyles();

    const [value, setValue] = useState('');
    //Formspree
    const [state, handleSubmit] = useForm("xknkbdrq");
    if (state.succeeded) {
        return <h2>Thanks for your time!</h2>;
    }  //Formspree

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off" type='submit' onSubmit={handleSubmit} >
            <TextField 
                id="standard-basic email" label="your@email.com" 
                required
                error
                />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <TextField 
                id="standard-basic" label="Your Message here"
                multiline
                value={value}
                onChange={handleChange}
                required
                error
                name="message"
                />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <Button className={classes.btn} variant="contained" type="submit"  disabled={state.submitting} >Submit</Button>
        </form>
    );
}
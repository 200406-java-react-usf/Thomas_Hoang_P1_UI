import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { NewReimb } from '../../dtos/new-reimb';
import { User } from '../../dtos/user';

interface IReimbProps {
    authUser: User;
    errorMessage: string;
    newReimbAction: (newReimb: NewReimb) => void;
}

const useStyles = makeStyles({
    reimbContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    registerForm: {
        width: "50%"
    }
});

const ReimbComponent = (props: IReimbProps) => {

    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let updateFormField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'firstName':
                setFirstName(e.currentTarget.value);
                break;
            case 'lastName':
                setLastName(e.currentTarget.value);
                break;
            case 'email':
                setEmail(e.currentTarget.value);
                break;
            case 'username':
                setUsername(e.currentTarget.value);
                break;
            case 'password':
                setPassword(e.currentTarget.value);
                break;
            default:
                console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`);
        }
    }

    let createReimb = async () => {
        props.newReimbAction(new NewReimb(1, 152.25, '2020-04-15 18:50:10', '2020-05-12 20:00:55', 'A reimbursement for lodging', 'RandomURLLink', 'Alice', 'Anderson', 'Bill', 'Bob', 'Denied', 'Lodging'));
    }

    return (
        props.authUser ? <Redirect to="/home" /> :
        <div className={classes.reimbContainer}>
            <form className={classes.registerForm}>
                <Typography align="center" variant="h4">All Reimbursements</Typography>
                <ol>
                    array.forEach(element => {
                        
                    });
                </ol>
                <br/><br/>
                <Button 
                    onClick={createReimb} 
                    variant="contained" 
                    color="primary" 
                    size="medium">Register
                </Button>
                <br/><br/>
                {
                    props.errorMessage 
                        ? 
                    <Alert severity="error">{props.errorMessage}</Alert>
                        :
                    <></>
                }
            </form>
        </div>
    );

}

export default ReimbComponent;
import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { NewReimb } from '../../dtos/new-reimb';
import { User } from '../../dtos/user';

interface IReimbProps {
    authUser: User;
    errorMessage: string;
    createReimbAction: (newReimb: NewReimb) => void;
}

const useStyles = makeStyles({
    reimbContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
    reimbForm: {
        width: "50%"
    }
});

const CreateReimbComponent = (props: IReimbProps) => {

    const classes = useStyles();

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [reimb_type, setType] = useState('');
    const [receipt, setReceipt] = useState('');

    let updateFormField = (e: any) => {
        switch (e.currentTarget.id) {
            case 'amount':
                setAmount(e.currentTarget.value);
                break;
            case 'description':
                setDescription(e.currentTarget.value);
                break;
            case 'reimb_type':
                setType(e.currentTarget.value);
                break;
            case 'username':
                setReceipt(e.currentTarget.value);
                break;
            default:
                console.warn(`Improper binding detected on element with id: ${e.currentTarget.id}`);
        }
    }

    let createReimb = async () => {
        props.createReimbAction(new NewReimb(152.25, '2020-04-15 18:50:10', 'A reimbursement for lodging', 'RandomURLLink','Bill', 'Bob', 'Lodging'));
    }

    return (
        props.authUser ? <Redirect to="/home" /> :
        <div className={classes.reimbContainer}>
            <form className={classes.reimbForm}>
                <Typography align="center" variant="h4">All Reimbursements</Typography>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="amount">Amount</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={amount} 
                        id="amount" type="text" 
                        placeholder="Enter Reimbursement Amount" />
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="description">Description</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={description} 
                        id="description" type="text" 
                        placeholder="Enter Reimbursement Description" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="reimb_type">Type Of Reimbursement</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={reimb_type} 
                        id="reimb_type" type="text" 
                        placeholder="Select Reimbursement Type" />
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel htmlFor="receipt">Receipt Image</InputLabel>
                    <Input 
                        onChange={updateFormField} 
                        value={receipt} 
                        id="reciept" type="file" 
                        placeholder="Upload Receipt Image" />
                </FormControl>
                <br/><br/>
                <Button 
                    onClick={createReimb} 
                    variant="contained" 
                    color="primary" 
                    size="medium">Create New Reimbursement
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

export default CreateReimbComponent;
import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { NewReimb } from '../../dtos/new-reimb';
import { User } from '../../dtos/user';
import { Reimb } from '../../dtos/reimb';
import { getAllReimbs } from '../../remote/reimb-service';

interface IReimbProps {
    authUser: User;
    errorMessage: string;
    reimbs: Reimb;
    CreateReimbAction: (newReimb: NewReimb) => void;
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

const MainReimbComponent = (props: IReimbProps) => {

    const classes = useStyles();

    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [reimb_type, setType] = useState('');
    const [receipt, setReceipt] = useState('');

    let renderRows = (e: any) => {
        return (
            <tr>
                <th>{props.reimbs.reimb_id}</th>
                <th>{props.reimbs.amount}</th>
                <th>{props.reimbs.submitted}</th>
                <th>{props.reimbs.resolved}</th>
                <th>{props.reimbs.description}</th>
                <th>{props.reimbs.receipt}</th>
                <th>{props.reimbs.author_first}</th>
                <th>{props.reimbs.resolver_first}</th>
                <th>{props.reimbs.reimb_status}</th>
                <th>{props.reimbs.reimb_type}</th>
            </tr>
        )
        }
    }

    let createReimb = async () => {
        props.CreateReimbAction(new NewReimb(152.25, '2020-04-15 18:50:10', 'A reimbursement for lodging', 'RandomURLLink','Bill', 'Bob', 'Lodging'));
    }

    return (
        !props.authUser ? <Redirect to="/home" /> :
        <div className={classes.reimbContainer}>
            <table>
            <thead>
                <td>Name</td>
                <td>Email</td>
                <td>City</td>
                <td>Company</td>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
            </table>
                {
                    props.errorMessage 
                        ? 
                    <Alert severity="error">{props.errorMessage}</Alert>
                        :
                    <></>
                }
        </div>
    );

}

export default MainReimbComponent;
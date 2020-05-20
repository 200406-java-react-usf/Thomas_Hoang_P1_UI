import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { NewReimb } from '../../dtos/new-reimb';
import { User } from '../../dtos/user';
import { Reimb } from '../../dtos/reimb';
import { Link } from 'react-router-dom';
import { getAllReimbs } from '../../remote/reimb-service';

interface IReimbProps {
    authUser: User;
    errorMessage: string;
    // reimbs: Reimb;
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

    // let renderRows = (e: any) => {
    //     return (
    //         /*May need to make workarounds on API so that I can translate 
    //         the state and obtain first name and last names.*/
    //         <tr>
    //             <th>{props.reimbs.reimb_id}</th>
    //             <th>{props.reimbs.amount}</th>
    //             <th>{props.reimbs.submitted}</th>
    //             <th>{props.reimbs.resolved}</th>
    //             <th>{props.reimbs.description}</th>
    //             <th>{props.reimbs.receipt}</th>
    //             <th>{props.reimbs.author_first} + " " + {props.reimbs.author_last}</th>
    //             <th>{props.reimbs.resolver_first} + " " + {props.reimbs.resolver_last}</th>
    //             <th>{props.reimbs.reimb_status}</th>
    //             <th>{props.reimbs.reimb_type}</th>
    //             <th><button className="editbtn">Edit</button></th>
    //         </tr>
    //     )
    //     }

    return (
        !props.authUser ? <Redirect to="/home" /> :
        <div className={classes.reimbContainer}>
            <table>
            <thead>
                <td>Reimbursement ID</td>
                <td>Amount</td>
                <td>Submitted Time</td>
                <td>Resolved Time</td>
                <td>Description</td>
                <td>Receipt</td>
                <td>Author</td>
                <td>Resolver</td>
                <td>Reimbursement Status</td>
                <td>Reimbursement Type</td>
                <td></td>
            </thead>
            {/* <tbody>
                {renderRows}
            </tbody> */}
            </table>
            <button>
                <Link to = '/createReimb'>Create Reimbursement</Link>
            </button>
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
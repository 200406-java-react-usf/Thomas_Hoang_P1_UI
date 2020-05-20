import React, { useState } from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { User } from '../../dtos/user';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import { getUsers } from '../../remote/user-service';

interface IMainUserProps {
    authUser: User;
    errorMessage: string;
}

const useStyles = makeStyles({
    userTable: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 40,
        padding: 20
    },
});

const MainUserComponent = (props: IMainUserProps) => {

    const classes = useStyles();
    const [users, setTableData] = useState([new User(0, '', '', '', '', '', '', '', '')]);
    async function getTableData(){
        let users = await getUsers();
        return users;
    }

    /*Creates the base table and loads in the data needed for the trable*/
    function renderTable(){
        return(
            <MaterialTable
            columns = {[
                {title: 'User ID', field: 'ers_user_id'},
                {title: 'Username', field: 'username'},
                {title: 'First Name', field: 'first_name'},
                {title: 'Last Name', field: 'last_name'},
                {title: 'Email', field: 'email'},
                {title: 'Role', field: 'role_name'},
            ]}
            data = {getTableData}
            title = "ERS Users"
            />
        )
    }

    return (
        (props.authUser.role === 'Admin') ? <Redirect to="/home" /> :
        <div className = {classes.userTable}>

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

export default MainUserComponent;
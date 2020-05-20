import React, { useState, useEffect } from 'react';
import { Typography, FormControl, InputLabel, Input, Button, makeStyles } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { User } from '../../dtos/user';
import { NewUser } from '../../dtos/new-user';
import { Link } from 'react-router-dom';
import MaterialTable from 'material-table';
import { getUsers, updateUser, deleteUserById, register} from '../../remote/user-service';

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
    const [users, setTableData] = useState([new User(0, '', '', '', '', '', '')]);
    const [errorMessage, setErrorMessage] = useState('');

    let getTableData = async() =>{
        let result = await getUsers();
        setTableData(result);
    }

    useEffect(() => {
        getTableData();
    });

    const updateRow = async (updatedUser: User) =>{
        try{
            if (!updatedUser.password){
                return <Alert severity="error">Please Enter a Password.</Alert>;
        }
            await updateUser(updatedUser);
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    const deleteRow = async (id: number) =>{
        try{
            await deleteUserById(id);
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    const addNew = async (updatedUser: NewUser) =>{
        try{
            await register(updatedUser);
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    /*Creates the base table and loads in the data needed for the trable*/
    function renderTable(){
        return(
            <MaterialTable
            columns = {[
                {title: 'User ID', field: 'ers_user_id'},
                {title: 'Username', field: 'username'},
                {title: 'Password', field: 'password'},
                {title: 'First Name', field: 'first_name'},
                {title: 'Last Name', field: 'last_name'},
                {title: 'Email', field: 'email'},
                {title: 'Role', field: 'role_name'}
            ]}
            data = {users}
            title = "ERS Users"
            editable= {{
               onRowAdd: newData =>
               new Promise((resolve,reject) => {
                   addNew(newData);
                   resolve();
               }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve,reject) =>{
                    resolve();
                    updateRow(newData);
                }),
                onRowDelete: oldData =>
                new Promise((resolve, reject) =>{
                    deleteRow(oldData.ers_user_id)
                })
            }}
            />
            }
    return (
        (props.authUser.role_name === 'FManager') ? <Redirect to="/home" /> :
        <div className = {classes.userTable}>
            {renderTable}
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
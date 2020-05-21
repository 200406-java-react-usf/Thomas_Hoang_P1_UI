import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Redirect } from 'react-router';
import { Alert } from '@material-ui/lab';
import { User } from '../../dtos/user';
import { Reimb } from '../../dtos/reimb';
import MaterialTable from 'material-table';
import { getAllReimbs, getAllByUserID, updateReimb, CreateReimb, deleteReimbById} from '../../remote/reimb-service';

export interface IMainReimbProps {
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

const MainReimbComponent = (props: IMainReimbProps) => {

    const classes = useStyles();
    const [reimbs, setTableData] = useState([new Reimb(0, 0, '', '', '', '', '', '', '', '', '', '')]);
    const [errorMessage, setErrorMessage] = useState('');

    /*Gets all reimbursements if the user is a Financial Manager
    else if they are an Employee 
    it grabs only the reimbursements for that Employee.*/
    let getTableData = async() =>{
        try{
            //@ts-ignore
            if (props.authUser?.role === 'FManager'){
                let result = await getAllReimbs();
                setTableData(result);
            }else if (props.authUser?.role === 'Employee'){
                //@ts-ignore
                let result = await getAllByUserID(props.authUser?.id);
                setTableData(result);
            }

        }catch(e){
            setErrorMessage(e.response.data.reason)
    }
    }
    

    const updateRow = async (updatedReimb: Reimb) =>{
        try{
            await updateReimb(updatedReimb);
            getTableData();
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    const deleteRow = async (id: number) =>{
        try{
            await deleteReimbById(id);
            getTableData();
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    const addNew = async (newReimb: Reimb) =>{
        try{
            await CreateReimb(newReimb);
            getTableData();
        }catch(e){
            setErrorMessage(e.response.data.reason)
        }
    }

    useEffect(() => {
        getTableData();
    }, []);

    return (
        !props.authUser ? <Redirect to="/home" /> :
        <div className = {classes.userTable}>
            <MaterialTable
            columns = {[
                {title: 'Reimbursement ID', field: 'reimb_id', editable: 'never'},
                {title: 'Amount', field: 'amount'},
                {title: 'Submitted Time', field: 'submitted', editable: 'never'},
                {title: 'Resolved Time', field: 'resolved', editable: 'never'},
                {title: 'Description', field: 'description'},
                {title: 'Receipt', field: 'receipt'},
                {title: 'Author First', field: 'author_first', editable: 'onAdd'},
                {title: 'Author Last', field: 'author_last', editable: 'onAdd'},
                {title: 'Resolver First', field: 'resolver_first'},
                {title: 'Resolver Last', field: 'resolver_last'},
                {title: 'Reimbursement Status', field: 'reimb_status', editable: "onUpdate"},
                {title: 'Reimbursement Type', field: 'reimb_type'}
            ]}
            data = {reimbs}
            title = "ERS Reimbursements"
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
                    deleteRow(oldData.reimb_id)
                })
            }}
            />
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
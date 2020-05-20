import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { P1Client } from '../../remote/P1-client';
import { User } from '../../dtos/user';
import { invalidateSession } from '../../remote/auth-service'

interface INavbarProps {
    authUser: User;
    username: string;
}

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'white'
    }
});

const NavbarComponent = (props: INavbarProps) => {

    const classes = useStyles();

    async function logout(){

        await invalidateSession;

        //Need to make a logout action and reducer.
    }

    function checkRole(){
        if (!props.authUser){
            return;
        }else if(props.authUser.role_name === "Admin"){
            return (
            <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                    <Link to='/users' className={classes.link}>Users</Link>
                </TypoGraphy>
            </ListItemText>
            )
        }else if (props.authUser.role_name === "FManager" || props.authUser.role_name === "Employee"){
            return (
            <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                    <Link to='/reimb' className={classes.link}>Reimbursements</Link>
                </TypoGraphy>
            </ListItemText>
            )
        }
    }

    function checkLogin(username: string){
        //@ts-ignore
        if(!username){
            return(
            <ListItemText inset>
                <TypoGraphy color="inherit" variant="h6">
                    <Link to='/login' className={classes.link}>Login</Link>
                </TypoGraphy>
            </ListItemText>
            );
        }else{
            return(
            <ListItemText inset>
                <TypoGraphy color = "inherit" variant = "h6">
                    <Link to = '' onClick = {logout} className = {classes.link}>Logout</Link>
                </TypoGraphy>
            </ListItemText> 
            );
        }
    }

    return (
        <div>
            <List component="nav">
                <ListItem component="div" >
                    <TypoGraphy color="inherit" variant="h5">Thomas Hoang</TypoGraphy>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="h6">
                            <Link to='/home' className={classes.link}>Home</Link>
                        </TypoGraphy>
                    </ListItemText>
                    {checkRole()}
                    {checkLogin(props.username)}
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="h6">
                            {props.username}
                        </TypoGraphy>
                    </ListItemText>
                </ListItem >
            </List>
        </div>
    );
}

export default NavbarComponent;
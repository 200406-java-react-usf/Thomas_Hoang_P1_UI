import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { P1Client } from '../../remote/P1-client';
import { User } from '../../dtos/user';

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

        await P1Client.get('/auth');
        //@ts-ignore
        props.authUser(null as User);
    
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
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="h6">
                            <Link to='/login' className={classes.link}>Login</Link>
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="h6">
                            <Link to='/admin' className={classes.link}>Admin</Link>
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color="inherit" variant="h6">
                            <Link to='/newreimb' className={classes.link}>Reimbursements</Link>
                        </TypoGraphy>
                    </ListItemText>
                    <ListItemText inset>
                        <TypoGraphy color = "inherit" variant = "h6">
                            <Link to = '' onClick = {logout} className = {classes.link}>Logout</Link>
                        </TypoGraphy>
                    </ListItemText> 
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
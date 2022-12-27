import { Box, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import { some, isEmpty } from 'lodash';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Login from '../../features/Auth/Login';
import Register from '../../features/Auth/Register';
import { logOut } from '../../features/Auth/userSlice';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
    },
    closeBtn: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        cursor: 'pointer',
        color: theme.palette.grey[500],
        zIndex: 1,
        border: 'none',
        backgroundColor: 'transparent',
    },
    boxCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
const MODE = {
    LOGIN: 'Login',
    REGISTER: 'Register',
};
export default function Header() {
    const dispatch = useDispatch();
    const LoggedIn = useSelector((state) => state.user.current);
    const isLogin = some(LoggedIn, isEmpty);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleLogOut = () => {
        const action = logOut();
        dispatch(action);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/home" className={classes.link}>
                            Thang Shop
                        </Link>
                    </Typography>
                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink to="/albums" className={classes.link}>
                        <Button color="inherit">Albums</Button>
                    </NavLink>
                    {!isLogin && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            {mode === 'Login' ? 'LOGIN' : 'REGISTER'}
                        </Button>
                    )}
                    {isLogin && (
                        <IconButton color="inherit" onClick={handleUserClick}>
                            <AccountCircle />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Menu
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem
                    onClick={() => {
                        handleLogOut();
                        handleCloseMenu();
                    }}
                >
                    Logout
                </MenuItem>
            </Menu>
            <div>
                <Dialog open={open} aria-labelledby="form-dialog-title">
                    <IconButton onClick={handleClose} class={classes.closeBtn}>
                        <Close />
                    </IconButton>
                    <DialogContent>
                        {mode === 'Register' && (
                            <>
                                <Register closeDialog={handleClose}></Register>
                                <Box class={classes.boxCenter}>
                                    <Button
                                        color="primary"
                                        onClick={() => setMode(MODE.LOGIN)}
                                    >
                                        Already have an account. Login here
                                    </Button>
                                </Box>
                            </>
                        )}
                        {mode === 'Login' && (
                            <>
                                <Login closeDialog={handleClose}></Login>
                                <Box class={classes.boxCenter}>
                                    <Button
                                        color="primary"
                                        onClick={() => setMode(MODE.REGISTER)}
                                    >
                                        Don't have an account. Register here
                                    </Button>
                                </Box>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { login } from '../userSlice';
Login.propTypes = {
    closeDialog: PropTypes.func,
};
Login.defaultProps = {
    closeDialog: null,
};
function Login(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar}= useSnackbar();
    const handleOnSubmit = async (values) => {
        try {
            const action = login(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            enqueueSnackbar(`Login done.`, { variant: "success" });
            const {closeDialog}=props;
            if(closeDialog){
                closeDialog()
            }
        } catch (err) {

            enqueueSnackbar(err.message, { variant: "error" });

        }
    };
    return (
        <div>
            <LoginForm onSubmit={handleOnSubmit} />
        </div>
    );
}

export default Login;

import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';
import PropTypes from 'prop-types';
Register.propTypes = {
    closeDialog: PropTypes.func,
};
Register.defaultProps = {
    closeDialog: null,
};
function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar}= useSnackbar();
    const handleOnSubmit = async (values) => {
        try {
            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);
            enqueueSnackbar(`Register done.`, { variant: "success" });
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
            <RegisterForm onSubmit={handleOnSubmit} />
        </div>
    );
}

export default Register;

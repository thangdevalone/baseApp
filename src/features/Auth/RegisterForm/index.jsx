import { yupResolver } from '@hookform/resolvers/yup';
import {
    Avatar,
    Button,
    LinearProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';

import { PropTypes } from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../components/form-controls/inputField';
import PasswordField from '../../../components/form-controls/passwordField';

const useStyle = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(2),
        position: 'relative',
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        margin: theme.spacing(2),
        textAlign: 'center',
        color: 'black',
    },
    submit: {
        margin: theme.spacing(3, 0, 1),
    },
    progress: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
RegisterForm.defaultValues = {
    onSubmit: null,
};
function RegisterForm(props) {
    const classes = useStyle();
    const schema = yup
        .object()
        .shape({
            fullname: yup
                .string()
                .required('Please enter your full name')
                .test(
                    'should has at least two words',
                    'Please enter at least two words',
                    (values) => {
                        return values.split(' ').length >= 2;
                    }
                ),
            email: yup
                .string()
                .required('Please enter your email')
                .email('Please enter a valid email address'),
            password: yup
                .string()
                .required('Please enter your password')
                .min(6, 'Please enter at least 6 characters'),
            rePassword: yup
                .string()
                .required('Please enter retype your password')
                .oneOf([yup.ref('password')], "Password doesn't match"),
        })
        .required();
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            rePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values, e) => {
        const { onSubmit } = props;
        if (!onSubmit) return;
        await onSubmit(values);
    };
    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOpenOutlined></LockOpenOutlined>
            </Avatar>
            <Typography variant="h5" className={classes.title}>
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="rePassword" label="Retype Password" form={form} />
                <Button
                    disabled={isSubmitting}
                    className={classes.submit}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;

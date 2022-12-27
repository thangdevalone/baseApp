import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,

};

function InputField(props) {
    const { form, name, label } = props;
    const { formState } = form;
    const hasError = !!formState.errors[`${name}`];

    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange } }) => (
                <TextField
                    error={hasError}
                    
                    variant='outlined'
                    margin='normal'
                    helperText={
                        formState.errors[`${name}`] ? (formState.errors[`${name}`]).message : ''
                    }
                    onChange={onChange}
                    label={label}
                    fullWidth
                    defaultValue=""
                />
            )}
        />
    );
}

export default InputField;

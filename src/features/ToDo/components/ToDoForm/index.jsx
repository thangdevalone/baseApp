import React from 'react';
import { PropTypes } from 'prop-types';
import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};
ToDoForm.defaultValues = {
    onSubmit: null,
};
function ToDoForm(props) {
    const schema = yup
        .object()
        .shape({
            title: yup.string().required('Co Loi!'),
        })
        .required();
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (values, e) => {
        const { onSubmit } = props;
        if (!onSubmit) return;
        onSubmit(values);
        form.reset();
        e.target.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h3>Todo Form </h3>
            <InputField name="title" label="ToDo" form={form} />
        </form>
    );
}

export default ToDoForm;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};
const useStyle= makeStyles((theme) => ({
    root:{
        padding:theme.spacing(2)
    },
    sub_root:{
        fontWeight: 'bold',
    },
}));
function FilterByPrice({onChange}) {
    const classes = useStyle()
    const [values,setValues]=useState({salePrice_gte:0,salePrice_lte:0});
    const handleChangeValue=(e)=>{
        const {name,value} = e.target;
        setValues((prevValues)=>({
            ...prevValues,
            [name]:value
        }))
    }
    const handleSubmit=()=>{
        if(onChange) onChange(values)
        setValues({
            salePrice_gte:0,salePrice_lte:0
        })
    }

    return (
        <Box className={classes.root}>
            <Typography className={classes.sub_root} >Giá</Typography>
            <Box>
                <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChangeValue}/>
                <span>-</span>
                <TextField name="salePrice_lte"  value={values.salePrice_lte} onChange={handleChangeValue}/>

            </Box>
            <Button variant='outlined' color='primary' onClick={handleSubmit}>Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;
import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    makeStyles,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};
const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    sub_root: {
        fontWeight: 'bold',
    },
}));
function FilterByService({ filters, onChange }) {
    const classes = useStyle();
    const handleChange=(e)=>{
        const {name,checked}=e.target
        if(onChange){
            onChange({[name]:checked});
        }
    }
    return (
        <Box className={classes.root}>
            <Typography className={classes.sub_root}>Giá</Typography>
            <Box>
                <FormGroup onChange={handleChange}>
                    {[
                        { value: 'isPromotion', label: 'Có khuyến mãi' },
                        { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
                    ].map((service) => (
                        <FormControlLabel    key={service.value} control={<Checkbox   checked={Boolean(filters[service.value])} name={service.value}  />} label={service.label} />
                    ))}
                </FormGroup>
            </Box>
        </Box>
    );
}

export default FilterByService;

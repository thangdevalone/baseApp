import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
    filters:PropTypes.object.isRequired,
    onChange:PropTypes.func,
};

function ProductFilter({filters, onChange}) {
    const handleCategoryChange=(newCategory)=>{
        if(!onChange) return;
        const newFilters={
            ...filters,
            "category.id":newCategory,
        }
        onChange(newFilters)
    }
    const handleChange=(newPrice)=>{
        if(!onChange) return;
        onChange(newPrice)

    }
    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange}/>
            <FilterByService filters={filters} onChange={handleChange}/>
        </Box>
    );
}

export default ProductFilter;
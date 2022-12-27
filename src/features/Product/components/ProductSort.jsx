import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onchange:PropTypes.func,
};


function ProductSort({currentSort,onChange}) {
    const handleSortChange=(e,newValue)=>{
        if(onChange){
            onChange(newValue)
        }
    }
    return (
        <Tabs value={currentSort} indicatorColor="primary" textColor='primary' aria-label='disabled tabs examble' onChange={handleSortChange}>
            <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
            <Tab label="Giá cao tới thấp" value="salePrice:DESC"></Tab>

        </Tabs>
    );
}

export default ProductSort;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};
const useStyle= makeStyles((theme) => ({
    root:{
        padding:theme.spacing(2)
    },
    sub_root:{
        fontWeight: 'bold',
    },
    menu:{
        padding:0,
        listStyleType:'none',
        "& > li":{
            marginTop:theme.spacing(1),
            '&:hover':{
                cursor: 'pointer'
            }
        }
        
    }
}));

function FilterByCategory({ onChange }) {
    const classes = useStyle()
    const [categoryList, setCatogoryList] = useState([]);
    useEffect(() => {
        (async () => {
            try{
                const response = await categoryApi.getAll();
                console.log({response})
                setCatogoryList(response.map((x)=>({
                    id:x.id,
                    name:x.name
                })))
            }
            catch (err) {
                console.error(err);
            }
        })();
    }, []);
    const handleCategoryClick = (category)=>{
        if(onChange) onChange(category.id);

    }
    return (
        <Box className={classes.root}>
            <Typography className={classes.sub_root} >Danh mục sản phẩm</Typography>
            <ul className={classes.menu}>
                {categoryList.map(category=>(
                    <li key={category.id} onClick={()=>handleCategoryClick(category)}>{category.name}</li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;

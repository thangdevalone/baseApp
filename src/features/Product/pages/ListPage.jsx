import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import productApi from '../../../api/productApi';
import SkeletonLoading from '../components/SkeletonLoading';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';

ListPage.propTypes = {};
const useStyle = makeStyles((theme) => ({
    root: {
        backgroundColor: 'rgb(245, 245, 250);',
        width: '100%',
    },
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 ',
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'row nowrap',
        marginTop:'10px',
        paddingBottom:'20px',
    }
  
}));
function ListPage(props) {
    const classes = useStyle();
    const [productList, setProductList] = useState({});
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        _page: 1, _limit: 9,_sort: 'salePrice:ASC'
    })
    const [pagination,setPagination] = useState({
        count:1,
        page:1,
    })
    useEffect(() => {
        (async () => {
            try {
                const { data,pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
                console.log(data,pagination);
                console.log(Math.ceil(pagination.count / pagination.limit))
            } catch (err) {
                console.log(err);
            }
            setLoading(false);
        })();
    }, [filters]);
    const handleChangePage=(e,page)=>{
        setFilters((filters)=>({
            ...filters,
            _page: page
        }))
    }
    const handleChangeSort=(sort)=>{
        setFilters((filters)=>({
            ...filters,
            _sort: sort
        }))
    }
    const handleFiltersChange=(newFilters)=>{
        setFilters((filters)=>({
            ...filters,
            ...newFilters
        }))
    }
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter filters={filters} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        
                        <Paper elevation={0}>
                        <ProductSort  currentSort={filters._sort} onChange={handleChangeSort}/>
                            {loading ? (
                                <SkeletonLoading length={9} />
                            ) : (
                                <ProductList product={productList} />
                            )}
                            <Box className={classes.pagination}>
                            <Pagination  count={Math.ceil(pagination.count / pagination.limit)} page={pagination.page} color='primary' onChange={handleChangePage} />

                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;

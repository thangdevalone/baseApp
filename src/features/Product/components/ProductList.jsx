import { Box, Container, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

ProductList.propTypes = {
    product: PropTypes.array,
};

ProductList.defaultProps = {
    product: [],
};

function ProductList(props) {
    const { product } = props;

    return (
        <Box>
            <Container>
                <Grid container>
                    {product.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                            <Product data={item}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductList;

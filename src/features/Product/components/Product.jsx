import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST, THUMBNAIL_URL } from '../../../constants';

Product.propTypes = {
    data: PropTypes.object,
};
Product.defaultProps = {
    data: {},
};
const useStyle = makeStyles((theme) => ({
    boxItem: {
        padding: '5px',
    },
    boxPrice: {
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '0 10px 0 0',
    },
}));
function Product({ data }) {
    const classes = useStyle();
    const thumbnailUrl = data.thumbnail
        ? `${STATIC_HOST}${data.thumbnail.url}`
        : `${THUMBNAIL_URL}`;
    return (
        <Box className={classes.boxItem}>
            <img src={thumbnailUrl} alt={data.name} width="100%" />
            <Typography variant="body2">{data.name}</Typography>

            <Typography variant="body2">
                <Box component={'span'} className={classes.boxPrice}>
                    {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    }).format(data.salePrice)}
                </Box>
                {data.promotionPercent > 0 ? `-${data.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;

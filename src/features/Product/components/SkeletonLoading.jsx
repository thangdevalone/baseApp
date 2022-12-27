import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

SkeletonLoading.propTypes = {
    length: PropTypes.number,
};

SkeletonLoading.defaultProps = {
    length: 6,
};
const useStyle = makeStyles((theme)=>({
    boxItem:{
        padding:'5px'
    },
}))
function SkeletonLoading(props) {
    const { length } = props;
    const classes=useStyle();
    return (
        <Box>
            <Container>
                <Grid container>
                    {Array.from(new Array(length)).map((x, idx) => (
                        <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
                            <Box className={classes.boxItem} >
                                <Skeleton
                                    variant="rect"
                                    width="100%"
                                    height={200}
                                />
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default SkeletonLoading;

import React from 'react';
import styles from './Header.module.css';
import { AppBar } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import {Typography} from '@mui/material';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = ({onShowCart}) => {
    return( 
    <StyledEngineProvider injectFirst>
        <AppBar className={styles.header}>
            <Typography component="h1" variant="h1">ReactMeals</Typography>
            <HeaderCartButton onClick={onShowCart}/>
        </AppBar>
    </StyledEngineProvider>
    )
};

export default Header
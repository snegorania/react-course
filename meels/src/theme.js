import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 500,
          md: 700,
          lg: 900,
          xl: 1200,
        },
    },
});

theme.typography = {
        fontFamily: '"Noto Sans JP", sans-serif',
        components: {
            MuiCssBaseline: {
              styleOverrides: `
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
              `,
            },
        },
        h1: {
            fontSize: '2rem',
            fontWeight: 'bold',
            [theme.breakpoints.down('md')]: {
                fontSize: '1.7rem', 
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem', 
            },
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 'bold',
            [theme.breakpoints.down('md')]: {
                fontSize: '1.7rem', 
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.5rem', 
            },
        },
        h3: {
            fontSize: '1rem',
            fontWeight: 'bold',
            [theme.breakpoints.down('md')]: {
                fontSize: '1rem', 
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem', 
            },
        },
        p: {
            fontSize: '1.3rem',
            [theme.breakpoints.down('md')]: {
                fontSize: '1rem', 
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem', 
            },
        },
        description: {
            fontStyle: 'italic',
            [theme.breakpoints.down('md')]: {
                fontSize: '1rem', 
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem', 
            },
        }
}

export default theme;
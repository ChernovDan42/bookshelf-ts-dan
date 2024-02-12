import { PaletteMode } from '@mui/material';


const getDesignTokens = (mode: PaletteMode) => ({

  typography: {
    fontFamily: [
      'DM-Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    body1: {
      fontSize: 64,
      color: 'red',
    }
  },
  breakpoints: {
    values: {
       xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  components: {
     MuiList: {
      styleOverrides: {
        root: {
          padding: '0',
          margin:'initial',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
          width:'inherit',
        },
      },
    },


    
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
        primary: {
          main: '#FFF',
        },
         background: {
      default: '#F6F6F6;',
        },
        text: {
          primary: '#111111',
          secondary: 'rgba(17, 17, 17, 0.60)',
          categoryTitle:'#B4AFAF'
        },
    }
      : {
          // palette values for dark mode
        primary: {
          main: '#111',
        },
          background: {
            default: '#202024',
          },
          text: {
            primary: '#FFF',
            secondary: 'rgba(255, 255, 255, 0.60)',
            categoryTitle:'#B4AFAF',
        },
      
        }),
  },
  
});

export default getDesignTokens

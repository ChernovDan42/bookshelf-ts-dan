import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, useState } from 'react';
import ColorModeContext from './ColorModeContext';
import getDesignTokens from './designTokens.ts';

type Props = {
  children: React.ReactNode;
};

export default function ToggleColorMode({ children }: Props) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  // main category name
  theme.typography.h2 = {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: '38px',
    letterSpacing: '-1.28px',
    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
      lineHeight: '52px',
      letterSpacing: '-1.92px',
    },
    marginBottom: '40px',
  };

  // normal category name
  theme.typography.h3 = {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '0.42px',
    textTransform: 'uppercase',
    [theme.breakpoints.up('md')]: {
      lineHeight: '24px',
    },
    marginBottom: '18px',
  };

  // Book title
  theme.typography.subtitle1 = {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: '-0.64px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
      lineHeight: '14px',
      letterSpacing: '-0.64px',
    },

    marginBottom: '4px',
  };

  //small category name
  theme.typography.subtitle2 = {
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '14px',
    letterSpacing: '0.36px',
  };

  // main text
  theme.typography.body1 = {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    letterSpacing: '-0.56px',
  };

  // italic author
  theme.typography.body2 = {
    fontSize: '12px',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: '14px',
    letterSpacing: '-0.48px',
  };

  theme.typography.button = {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '18px',
    letterSpacing: '-0.14px',
    textTransform: 'uppercase',
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme={false} />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

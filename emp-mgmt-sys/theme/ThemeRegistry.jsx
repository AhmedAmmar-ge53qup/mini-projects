"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function ThemeRegistry({children}) {
  return (
    <NextAppDirEmotionCacheProvider options={{key: 'mui'}}>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}

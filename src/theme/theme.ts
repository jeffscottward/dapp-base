import type { Theme } from 'theme-ui'

import buttonVariants from './buttons'

export const theme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Inter", sans-serif',
    heading: '"Montserrat", sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.75,
    heading: 1.25,
  },
  colors: {
    background: '#EEE',
    text: '#666666',
    primary0: 'navy',
    primary00: 'blue',
    primary000: 'lightblue',
    secondary0: 'darkgreen',
    secondary00: 'green',
    secondary000: 'lightgreen',
    gray0: 'darkgray',
    gray00: 'gray',
    gray000: 'lightgray',
  },
  forms: {
    select: {
      bg: 'transparent',
      border: '2px solid transparent',
      borderColor: 'text',
      cursor: 'pointer',
      borderRadius: '0.5rem',
    },
    input: {
      border: '2px solid transparent',
      borderColor: 'text',
    },
  },
  buttons: {
    ...buttonVariants,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      scrollBehavior: 'smooth',
      fontSize: '100%',
      WebkitTextSizeAdjust: '100%',
      fontVariantLigatures: 'none',
      WebkitFontVariantLigatures: 'none',
      textRendering: 'optimizeLegibility',
      MozOsxFontSmoothing: 'grayscale',
      fontSmoothing: 'antialiased',
      WebkitFontSmoothing: 'antialiased',
      textShadow: 'rgba(0, 0, 0, 0.01) 0 0 0.0625rem',
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        position: 'relative',
        outline: 'none',
      },
      '&::before, &::after': {
        display: 'none',
      },
      body: {
        minHeight: '100vh',
        scrollBehavior: 'smooth',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'scroll',
        '&::before, &::after': {
          display: 'none',
          zIndex: -1,
          position: 'absolute',
          content: "''",
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundAttachment: 'scroll',
        },
      },
      fieldset: {
        padding: 0,
        border: 'none',
      },
      'ul, ol, li': {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      'a, Button, [type="Button"], [type="reset"], [type="submit"], [type="file"], [type="file"]::-webkit-file-upload-Button':
        {
          textTransform: 'none',
          appearance: 'none',
          cursor: 'pointer',
        },
      'a, a:visited, a:active': {
        textDecoration: 'none',
      },
      'img, svg, picture, span, a, b, u, i, small, sub, strong, label': {
        display: 'inline-block',
      },
      'table, thead, tbody, tfoot, tr, td, th': {
        borderSpacing: 0,
        textAlign: 'left',
      },
      'table tbody tr:nth-of-type(even)': {
        background: 'rgba(255, 255, 255, 0.04)',
      },
      'table tbody tr:hover': {
        background: 'rgba(255, 255, 255, 0.04)',
      },
      '.row': {
        display: 'flex',
      },
      '.col': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.animate.fadeIn': {
        animation: `fadeIn 1.75s`,
      },
      '.animate.fadeOut': {
        animation: `fadeOut 1.75s`,
      },
    },
    h1: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      marginTop: '0',
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
    },
    pre: {
      mt: 0,
      fontFamily: 'monospace',
      overflowX: 'auto',
      border: '2px solid transparent',
      borderColor: 'text',
      padding: '.75rem',
      borderRadius: '0.5rem',
      color: 'text',
      code: {
        color: 'text',
      },
    },
    code: {
      m: 0,
      fontFamily: 'monospace',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
}

export default theme

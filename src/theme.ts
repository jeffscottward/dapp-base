import buttonVariants from './theme/buttons'

export const timing = [.25, .5, .75, 1, 1.25, 1.5, 1.75, 2, 3]

const GlobalTheme = {
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
    primary0: 'blue',
    primary00: 'lightblue',
    primary000: 'navy',
    secondary0: 'green',
    secondary00: 'lightgreen',
    secondary000: 'darkgreen',
    gray0: 'lightgray',
    gray00: 'darkgray',
    gray000: 'gray',
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
    ...buttonVariants
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
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

export default GlobalTheme
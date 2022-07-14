import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import colorPalette from './colors'

export const {
  styled,
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {
      ...colorPalette,
      background: '$gray12',
      text: '$gray3'
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fonts: {
      body: '"Inter", sans-serif',
      heading: '"Montserrat", sans-serif',
      monospace: '"Roboto Mono", monospace',
    },
    fontWeights: {
      body: 400,
      heading: 600,
      bold: 700,
    },
    lineHeights: {
      body: 1.75,
      heading: 1.25,
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
    media: {
      bp1: '(min-width: 520px)',
      bp2: '(min-width: 900px)',
      bp3: '(min-width: 1200px)',
      bp4: '(min-width: 1800px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft' | 'paddingRight'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop' | 'paddingBottom'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft' | 'marginRight'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop' | 'marginBottom'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({
      minWidth: value,
    }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),
    d: (value: Stitches.PropertyValue<'display'>) => ({
      display: value,
    }),
    fl: (value: Stitches.PropertyValue<'flex'>) => ({
      flex: value,
    }),
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    flw: (value: Stitches.PropertyValue<'flexWrap'>) => ({
      flexWrap: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    pc: (value: Stitches.PropertyValue<'placeContent'>) => ({
      placeContent: value,
    }),
    pos: (value: Stitches.PropertyValue<'position'>) => ({
      position: value,
    }),
    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bg: (value: Stitches.PropertyValue<'background'>) => ({
      background: value,
    }),
    bgc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    z: (value: Stitches.PropertyValue<'zIndex'>) => ({
      zIndex: value,
    }),
    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({
      textAlign: value,
    }),
    ff: (value: Stitches.PropertyValue<'fontFamily'>) => ({
      fontFamily: value,
    }),
    fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
      fontSize: value,
    }),
    fw: (value: Stitches.PropertyValue<'fontWeight'>) => ({
      fontWeight: value,
    }),
    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({
      boxShadow: value,
    }),
    ts: (value: Stitches.PropertyValue<'textShadow'>) => ({
      textShadow: value,
    }),
    bc: (value: Stitches.PropertyValue<'borderColor'>) => ({
      borderColor: value,
    }),
    tt: (value: Stitches.PropertyValue<'textTransform'>) => ({
      textTransform: value,
    }),
    td: (value: Stitches.PropertyValue<'textDecoration'>) => ({
      textDecoration: value,
    }),
  },
})

export const globalStyles = globalCss({
  '*': {
    ff: 'sans-serif',
    fs: '100%',
    lh: '1',
    ts: 'rgba(0, 0, 0, 0.01) 0 0 0.0625rem',
    scrollBehavior: 'smooth',
    WebkitTextSizeAdjust: '100%',
    fontVariantLigatures: 'none',
    WebkitFontVariantLigatures: 'none',
    textRendering: 'optimizeLegibility',
    MozOsxFontSmoothing: 'grayscale',
    fontSmoothing: 'antialiased',
    WebkitFontSmoothing: 'antialiased',
  },
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    pos: 'relative',
    outline: 'none',
  },
  '&::before, &::after': {
    d: 'none',
  },
  body: {
    minH: '100vh',
    scrollBehavior: 'smooth',
    m: 0,
    p: 0,
    bg: '$background',
    color: '$text',
    overflowX: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundAttachment: 'scroll',
    '&::before, &::after': {
      d: 'none',
      z: -1,
      pos: 'absolute',
      content: "''",
      top: 0,
      left: 0,
      w: '100vw',
      h: '100vh',
      backgroundAttachment: 'scroll',
    },
  },
  h1: {
    mt: 0,
    fs: '$6',
  },
  h2: {
    mt: 0,
    fs: '$5',
  },
  h3: {
    mt: 0,
    fs: '$4',
  },
  h4: {
    mt: 0,
    fs: '$3',
  },
  h5: {
    mt: 0,
    fs: '$2',
  },
  h6: {
    mt: 0,
    fs: '$1',
  },
  p: {
    mt: 0,
  },
  a: {
    color: '$text',
    td: 'none',
  },
  pre: {
    mt: 0,
    ff: 'monospace',
    overflowX: 'auto',
    border: '2px solid transparent',
    p: '.75rem',
    br: '0.5rem',
  },
  code: {
    m: 0,
    ff: 'monospace',
  },
  table: {
    w: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  th: {
    ta: 'left',
    borderBottomStyle: 'solid',
  },
  td: {
    ta: 'left',
    borderBottomStyle: 'solid',
  },
  img: {
    maxW: '100%',
  },
  fieldset: {
    p: 0,
    border: 'none',
  },
  'ul, ol, li': {
    m: 0,
    p: 0,
    listStyle: 'none',
  },
  'a, Button, [type="Button"], [type="reset"], [type="submit"], [type="file"], [type="file"]::-webkit-file-upload-Button':
    {
      tt: 'none',
      appearance: 'none',
      cursor: 'pointer',
    },
  'a, a:visited, a:active': {
    td: 'none',
  },
  'img, svg, picture, span, a, b, u, i, small, sub, strong, label': {
    d: 'inline-block',
  },
  'label[for]': {
    cursor: 'pointer',
  },
  'table, thead, tbody, tfoot, tr, td, th': {
    borderSpacing: 0,
    ta: 'left',
  },
  'table tbody tr:nth-of-type(even)': {
    bg: 'rgba(255, 255, 255, 0.04)',
  },
  'table tbody tr:hover': {
    bg: 'rgba(255, 255, 255, 0.04)',
  },
  '.row': {
    d: 'flex',
  },
  '.col': {
    d: 'flex',
    fd: 'column',
  },
  '.animate.fadeIn': {
    animation: `fadeIn 1.75s`,
  },
  '.animate.fadeOut': {
    animation: `fadeOut 1.75s`,
  },
})

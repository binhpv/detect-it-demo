import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $pageBackground: 'rgb(240,240,240)',
      $codeBlockBackground: 'rgb(224,224,224)',
      $text: 'rgb(0,0,0)',
      $textLowContrast: 'rgb(128,128,128)',
      $red: 'rgb(224,0,0)',
      $green: 'rgb(0,168,0)',
      $blue: 'rgb(0,0,224)',
    },
  },
  breakpoints: {},
  utils: {},
});

export const darkThemeClass = css.theme({
  colors: {
    $pageBackground: 'rgb(32,32,32)',
    $codeBlockBackground: 'rgb(56,56,56)',
    $text: 'rgb(192,192,192)',
    $textLowContrast: 'rgb(136,136,136)',
    $red: 'rgb(216,0,0)',
    $green: 'rgb(0,168,0)',
    $blue: 'rgb(118,118,255)',
  },
});

export const globalStyles = css.global({
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    color: '$text',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    webkitFontSmoothing: 'antialiased',
    fontSize: '16px',
    fontWeight: 300,
    textSizeAdjust: 'none',
  },
  '#root': {
    minHeight: '100%',
    backgroundColor: '$pageBackground',
  },
  'body, div, span, a, p, h1, h2, code': {
    margin: 0,
    border: 0,
    padding: 0,
    boxSizing: 'inherit',
    font: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'inherit',
    textAlign: 'inherit',
    color: 'inherit',
    background: 'transparent',
  },
});

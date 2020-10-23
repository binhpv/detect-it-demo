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

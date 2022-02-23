import { createGlobalStyle } from 'styled-components';

import RecoletaWOFF2 from "../assets/fonts/recoleta/recoletaregular.woff2";
import RecoletaWOFF from '../assets/fonts/recoleta/recoletaregular.woff';
import RecoletaTTF from '../assets/fonts/recoleta/recoletaregular.ttf';

import RecoletaMediumWOFF2 from '../assets/fonts/recoleta/Recoleta-Medium.woff2'
import RecoletaMediumWOFF from '../assets/fonts/recoleta/Recoleta-Medium.woff'
import RecoletaMediumTTF from '../assets/fonts/recoleta/Recoleta-Medium.ttf'

import RecoletaBoldWOFF2 from '../assets/fonts/recoleta/Recoleta-Bold.woff2'
import RecoletaBoldWOFF from '../assets/fonts/recoleta/Recoleta-Bold.woff'
import RecoletaBoldTTF from '../assets/fonts/recoleta/Recoleta-Bold.ttf'

import BiotifWOFF2 from "../assets/fonts/biotif/Biotif-Regular.woff2";
import BiotifWOFF from '../assets/fonts/biotif/Biotif-Regular.woff';
import BiotifTTF from '../assets/fonts/biotif/Biotif-Regular.ttf';

import BiotifMediumWOFF2 from '../assets/fonts/biotif/Biotif-Medium.woff2'
import BiotifMediumWOFF from '../assets/fonts/biotif/Biotif-Medium.woff'
import BiotifMediumTTF from '../assets/fonts/biotif/Biotif-Medium.ttf'

import BiotifSemiBoldWOFF2 from '../assets/fonts/biotif/Biotif-SemiBold.woff2'
import BiotifSemiBoldWOFF from '../assets/fonts/biotif/Biotif-SemiBold.woff'
import BiotifSemiBoldTTF from '../assets/fonts/biotif/Biotif-SemiBold.ttf'

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Recoleta';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'), local('Recoleta-Regular'), 
    url(${RecoletaWOFF2}) format('woff2'),
    url(${RecoletaWOFF}) format('woff'),
    url(${RecoletaTTF}) format('ttf');
  }
  @font-face {
    font-family: 'Recoleta';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'), local('Recoleta-Medium'), 
    url(${RecoletaMediumWOFF2}) format('woff2'),
    url(${RecoletaMediumWOFF}) format('woff'),
    url(${RecoletaMediumTTF}) format('ttf');
  }
  @font-face {
    font-family: 'Recoleta';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'), local('Recoleta-Bold'), 
    url(${RecoletaBoldWOFF2}) format('woff2'),
    url(${RecoletaBoldWOFF}) format('woff'),
    url(${RecoletaBoldTTF}) format('ttf');
  }

  @font-face {
    font-family: 'Biotif';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'), local('Biotif-Regular'), 
    url(${BiotifWOFF2}) format('woff2'),
    url(${BiotifWOFF}) format('woff'),
    url(${BiotifTTF}) format('ttf');
  }
  @font-face {
    font-family: 'Biotif';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'), local('Biotif-Medium'), 
    url(${BiotifMediumWOFF2}) format('woff2'),
    url(${BiotifMediumWOFF}) format('woff'),
    url(${BiotifMediumTTF}) format('ttf');
  }
  @font-face {
    font-family: 'Biotif';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: local('PT Sans'), local('Biotif-SemiBold'), 
    url(${BiotifSemiBoldWOFF2}) format('woff2'),
    url(${BiotifSemiBoldWOFF}) format('woff'),
    url(${BiotifSemiBoldTTF}) format('ttf');
  }

`;

export default GlobalFonts;

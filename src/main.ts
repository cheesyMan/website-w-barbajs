/** @format */

import barba from '@barba/core';
import { basicTransition } from './barba-js/barba-transitions';

import './style.css';

barba.init({
  debug: true,
  transitions: [basicTransition],
});

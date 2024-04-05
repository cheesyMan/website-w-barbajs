/** @format */

import barba from '@barba/core';

import './style.css';
import { basicTransition } from './barba-js/barba-transitions';

barba.init({
  transitions: [basicTransition],
});

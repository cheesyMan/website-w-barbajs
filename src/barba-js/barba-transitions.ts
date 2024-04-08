/** @format */

import { type ITransitionPage } from '@barba/core';
import gsap from 'gsap';

const basicTransition: ITransitionPage = {
  name: 'opacity-transition',
  // sync: true,
  leave: async data => {
    console.log('leave', data);

    await gsap.to(data.current.container, {
      opacity: 0,
      duration: 1,
    });
  },
  enter: async data => {
    console.log('enter', data);

    const newTitle = document.getElementById('page-title')! as HTMLHeadingElement;

    switch (data.next.namespace) {
      case 'home':
        newTitle.innerText = data.next.namespace = 'WEBSITE HOME';
        break;
      case 'contacts':
        newTitle.innerText = data.next.namespace = 'CONTACTS';
        break;
      default:
        newTitle.innerText = data.next.namespace = 'GENERIC';
        break;
    }

    await gsap.from(data.next.container, {
      opacity: 0,
      duration: 1,
    });
  },
};

export { basicTransition };

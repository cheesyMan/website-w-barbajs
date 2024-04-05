/** @format */

import { ITransitionPage } from '@barba/core';

const basicTransition: ITransitionPage = {
  name: 'basic',
  leave(data) {
    console.log('leave', data);
  },
  enter(data) {
    console.log('enter', data);
    const newTitle = document.getElementById('page-title')! as HTMLHeadingElement;

    newTitle.innerText = data.next.namespace;
  },
};

export { basicTransition };

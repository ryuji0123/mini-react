/**
 * @flow
 */

import { createElement } from '../src';

test('createElement', () => {
  let expected = {
    type: 'div',
    props: { children: [] },
  };
  let elem = createElement('div', null);
  expect(elem).toEqual(expected);
});

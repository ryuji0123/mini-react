/**
 * @flow
 */

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  };
}

test('createElement', () => {
  let expected = {
    type: 'div',
    props: { children: [] },
  };
  let elem = createElement('div', null);
  expect(elem).toEqual(expected);
});

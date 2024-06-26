import {setup} from '#testHelpers'
import {isDescendantOrSelf} from '#src/utils'

test('isDescendantOrSelf', async () => {
  setup(`<div><p><span></span><a></a></p></div>`)

  expect(
    isDescendantOrSelf(
      document.querySelector('span') as Element,
      document.querySelector('a') as Element,
    ),
  ).toBe(false)
  expect(
    isDescendantOrSelf(
      document.querySelector('span') as Element,
      document.querySelector('div') as Element,
    ),
  ).toBe(true)
  expect(
    isDescendantOrSelf(
      document.querySelector('span') as Element,
      document.querySelector('span') as Element,
    ),
  ).toBe(true)
})

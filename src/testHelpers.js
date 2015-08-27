import unexpected from 'unexpected'
import unexpectedReactShallow from 'unexpected-react-shallow'
import React from 'react/addons'

const TestUtils = React.addons.TestUtils

export const expect = unexpected.clone().installPlugin(unexpectedReactShallow)

export function createRenderer() {
    return TestUtils.createRenderer()
}

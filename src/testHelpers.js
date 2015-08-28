import unexpected from 'unexpected'
import unexpectedReactShallow from 'unexpected-react-shallow'
import React from 'react/addons'

const TestUtils = React.addons.TestUtils

export const expect = unexpected.clone().installPlugin(unexpectedReactShallow)

export function createRenderer(component, deep = 0) {
    let renderer = TestUtils.createRenderer()
    if (component) {
        renderer.render(component)
        if (deep > 0) {
            renderer = createRenderer(renderer.getRenderOutput(), deep - 1)
        }
    }

    return renderer
}

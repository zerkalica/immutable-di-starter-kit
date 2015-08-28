/* eslint-env mocha */
import React from 'react'

import {expect, createRenderer} from 'app/testHelpers'
import Layout from 'app/components/Layout'
import App from 'app/components/App'

describe('App', () => {
    it.skip('should rendered', () => {
        const renderer = createRenderer()
        renderer.render(<App/>)
        expect(renderer, 'to have rendered', <Layout/>)
    })
})

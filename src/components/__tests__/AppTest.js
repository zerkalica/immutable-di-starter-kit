/* eslint-env mocha */
import React from 'react'

import {expect, createRenderer} from 'app/testHelpers'
import App from 'app/components/App'

describe('App', () => {
    it('should rendered', () => {
        const renderer = createRenderer()
        renderer.render(<App/>)
        expect(renderer, 'to contain', <div className="app"/>)
    })
})

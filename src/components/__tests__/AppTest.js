/* eslint-env mocha */
import React from 'react'

import {expect, createRenderer} from 'app/testHelpers'
import Layout from 'app/components/Layout'
import App from 'app/components/App'


describe('App', () => {
    it('should rendered', () => {
        expect(createRenderer(<App/>, 1), 'to have rendered', <Layout/>)
    })
})

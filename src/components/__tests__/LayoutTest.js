/* eslint-env mocha */
import React from 'react'

import {expect, createRenderer} from 'app/testHelpers'
import Layout from 'app/components/Layout'

describe('Layout', () => {
    it('should rendered', () => {
        expect(createRenderer(<Layout/>), 'to have rendered', <div className="app"/>)
    })
})

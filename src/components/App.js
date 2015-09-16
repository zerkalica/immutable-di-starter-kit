import React from 'react'
import root from 'immutable-di/react/root'
import Counter from 'app/components/counter/Counter'
import Layout from 'app/components/Layout'

@root()
export default class App extends React.Component {
    render() {
        return (
            <Layout>
                <h1>Counter app</h1>
                <Counter />
            </Layout>
        )
    }
}

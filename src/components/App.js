import 'app/components/App.styl'
import React from 'react'
import root from 'immutable-di/react/root'
import Counter from 'app/components/counter/Counter'

@root
export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Counter />
            </div>
        )
    }
}

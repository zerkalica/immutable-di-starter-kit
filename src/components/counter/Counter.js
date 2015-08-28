import React, {PropTypes} from 'react'
import statefull from 'immutable-di/react/statefull'

import AddCounter from 'app/actions/counter/AddCounter'

const {func, number} = PropTypes

@statefull({
    counter: ['counter', 'value'],
    addCounter: AddCounter
})
export default class Counter extends React.Component {
    static propTypes = {
        counter: number.isRequired,
        addCounter: func
    }

    render() {
        const {
            counter,
            addCounter
        } = this.props

        return (
            <div className="counter">
                <div>counter value: {counter}</div>
                <button onClick={() => addCounter()}>Add</button>
            </div>
        )
    }
}
